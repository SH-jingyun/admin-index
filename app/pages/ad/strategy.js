import React, { Component } from 'react';
import {
  Button, Form, Layout, Input, message, Select, Upload, Icon, Popconfirm,
} from 'antd';
import TableList from '@tableList';
import {
  adStrategy,
  adStrategyDetail,
} from '@apis/manage';
import { browserHistory } from 'react-router';

const FormItem = Form.Item

const { Content } = Layout;
const { Option } = Select
const { TextArea } = Input;

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
      adStatusList: [{ key: 1, value: '开启' }, { key: 0, value: '关闭' }],
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
    adStrategy({ ...this.state.searchKey }, (res) => {
      this.setState({
        listResult: res.data,
      });
      callback && callback();
    });
  }

  add() {
    this.setState({ detail: {}, showDetail: true });
  }

  // 点击详情
  handleInfo = (id) => {
    adStrategyDetail({ strategr_id: id }, (res) => {
      this.setState({
        detail: res.data,
        showDetail: true,
        detailId: id,
      });
    });
  };


  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (error) { return false; }
      adStrategyDetail({ ...value, id: this.state.detailId, action: 'edit' }, () => {
        message.success('操作成功');
        // 新增成功
        let curpage = this.state.searchKey.pageNo;
        // eslint-disable-next-line eqeqeq
        if (this.state.detailId == 0) {
          if (this.state.listResult && this.state.listResult.totalCount > 0) {
            curpage = Math.floor(this.state.listResult.totalCount / this.state.searchKey.pageSize) + 1;
          }
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

  handleChange(id, name) {
    adStrategy({ version_id: id, app_name: name, action: 'change' }, () => {
      message.success('操作成功');
      this.getData();
    }, (res) => {
      message.warning(res.msg)
    });
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

  // 生成表格头部信息
  renderColumn() {
    return [
      {
        title: '广告策略名称',
        dataIndex: 'strategy_name',
        key: 'strategy_name',
      },
      {
        title: '应用名称',
        dataIndex: 'app_name',
        key: 'app_name',
      },
      {
        title: '广告位名称',
        dataIndex: 'position_name',
        key: 'position_name',
      },
      {
        title: '广告位类型',
        dataIndex: 'position_type_name',
        key: 'position_type_name',
      },
      {
        title: '用户群组名称',
        dataIndex: 'group_name',
        key: 'group_name',
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
      },
      {
        title: '操作',
        key: 'operate',
        width: '15%',
        render: (text, record) => (
          <span>
            <span>
              <a onClick={() => browserHistory.push(`/ad-strategy-details/${record.strategy_id}`)}>详情</a>
            </span>
          </span>
        ),
      },
    ];
  }

  // #endregion

  render() {
    const {
      listResult,
    } = this.state;
    console.log(listResult)
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
                  rowKey={(record, index) => index}
                  columns={this.renderColumn()}
                  dataSource={listResult.list}
                  currentPage={this.state.searchKey.pageNo}
                  pageSize={this.state.searchKey.pageSize}
                  onChange={this.pageChange}
                  onShowSizeChange={this.pageSizeChange}
                  totalCount={listResult.totalCount}
                />
              </div>
              <div className="page-footer">
                <div className="page-footer-buttons">
                  <Button
                    type="primary"
                    style={{ marginRight: '10px' }}
                    onClick={() => browserHistory.push('/ad-strategy-details/0')}
                  >
                    {' '}
                      添加策略
                  </Button>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
