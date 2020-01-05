import React, { Component } from 'react';
import {
  Button, Form, Layout, Input, message, Select, Upload, Icon, Popconfirm
} from 'antd';
import TableList from '@tableList';
import Drawer from '@components/draw/draw'
import {
  fetchWithdraw,
  fetchWithdrawAction
} from '@apis/manage';
import { mockURL } from '@config';

const FormItem = Form.Item

const { Content } = Layout;
const { Option } = Select
@Form.create({})
// 声明组件  并对外输出
export default class app extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props);
    this.state = {
      searchKey: {
        pageSize: 10,
        pageNo: 1,
      },
      listResult: {},
      detail: {},
      showDetail: false,
      detailId: 0,
      forceUpdateSelect: [{ key: 1, value: '是' }, { key: 0, value: '否' }],
      //      fileList:[]
    };
  }

  // 组件即将加载
  componentWillMount() {
    this.setState(() => {
      this.getData();
    });
  }

  // 组件已经加载到dom中
  //  componentDidMount() {
  //    this.props.form.setFieldsValue({ key: '' });
  //  }

  // 获取活动列表数据
  getData(callback) {
    fetchWithdraw({ ...this.state.searchKey }, (res) => {
      this.setState({
        listResult: res.data,
      });
      callback && callback();
    });
  }

  handleSuccess(id) {
    fetchWithdrawAction({ withdraw_id: id, action:'success' }, (res) => {
      this.setState({
        detail: res.data,
        showDetail: true,
        detailId: id,
      });
    });
  }

  handleFailed(id) {
    fetchWithdrawAction({ withdraw_id: id, action:'failed' }, (res) => {
      this.setState({
        detail: res.data,
        showDetail: true,
        detailId: id,
      });
    });
  }

  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (error) { return false; }
      fetchVersionDetail({ ...value, version_id: this.state.detailId, action: 'edit' }, () => {
        message.success('操作成功');
        // 新增成功
        let curpage = this.state.searchKey.pageNo;
        if (this.state.detailId == 0 && this.state.listResult && this.state.listResult.totalCount > 0) {
          curpage = Math.floor(this.state.listResult.totalCount / this.state.searchKey.pageSize) + 1;
        }
        this.setState({
          showDetail: false,
          searchKey: {
            ...this.state.searchKey,
            pageNo: curpage,
          },
          detailId: 0,
          detail: {},
        }, () => {
          this.getData();
        });
      }, (res) => {
        message.warning(res.msg)
      });
    })
  }

  // 页数改变事件
  pageChange = (newPage) => {
    this.state.searchKey.pageNo = newPage;
    this.getData();
  };

  // 页大小改变事件
  pageSizeChange = (e, pageSize) => {
    this.state.searchKey.pageNo = 1;
    this.state.searchKey.pageSize = pageSize;
    this.getData();
  };
  
  deleteButton = (id) => {
    fetchVersionDetail({ version_id: id, action: 'delete'}, () => {
      message.success('删除成功')
        this.getData();
    })
  }

  // 生成表格头部信息
  renderColumn() {
    return [
      {
        title: '用户id',
        dataIndex: 'user_id',
        key: 'user_id',
      },
      {
        title: '提现金币数',
        dataIndex: 'withdraw_amount',
        key: 'withdraw_amount',
      },
      {
        title: '提现金额',
        dataIndex: 'withdraw_gold',
        key: 'withdraw_gold',
      },
      {
        title: '提现账号',
        dataIndex: 'alipay_account',
        key: 'alipay_account',
      },
      {
        title: '提现名称',
        dataIndex: 'alipay_name',
        key: 'alipay_name',
      },
      {
        title: '提现状态',
        dataIndex: 'withdraw_status',
        key: 'withdraw_status',
      },
      {
        title: '备注',
        dataIndex: 'withdraw_remark',
        key: 'withdraw_remark',
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
      },
      {
        title: '操作',
        key: 'operate',
        render: (text, record, index) => (
                'pending' == record.withdraw_status ? 
          (<span>
            <Popconfirm title="通过?" onConfirm={() => this.handleSuccess(record.withdraw_id)}>
              <a>通过</a>
            </Popconfirm>
            <Popconfirm title="拒绝?" onConfirm={() => this.handleFailed(record.withdraw_id)}>
              <a>拒绝</a>
            </Popconfirm>
          </span>) : null
        ),
      },
    ];
  }

  // #endregion

  render() {
    const {
      userDeptResult,
      listResult,
      detailResult,
      forceUpdateSelect,
      //      userRoleSetResult,
    } = this.state;
    // for detail
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 12 },
    };

    return (
      <div className="page page-scrollfix page-usermanage">
        <Layout>
          <Layout className="page-body">
            <Content>
              <div className="page-content has-pagination table-flex table-scrollfix">
                <TableList
                  rowKey="version_id"
                  columns={this.renderColumn()}
                  dataSource={listResult.list}
                  currentPage={this.state.searchKey.pageNo}
                  pageSize={this.state.searchKey.pageSize}
                  onChange={this.pageChange}
                  onShowSizeChange={this.pageSizeChange}
                  totalCount={listResult.totalCount}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
