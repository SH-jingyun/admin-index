import React, { Component } from 'react';
import {
  Button, Form, Layout, Input,
} from 'antd';
import TableList from '@tableList';
import {
  dogsUserList,
} from '@apis/manage';

const FormItem = Form.Item

const { Content } = Layout;

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
        user_id: 0,
        invited_code: 0,
      },
      listResult: {},
    };
  }

  // 组件即将加载
  componentWillMount() {
    this.setState(() => {
      this.getData();
    });
  }

  // 获取活动列表数据
  getData(callback) {
    dogsUserList({ ...this.state.searchKey }, (res) => {
      this.setState({
        listResult: res.data,
      });
      callback && callback();
    });
  }

  // 搜索
  handleSearch = (e) => {
    e.preventDefault();
    // eslint-disable-next-line camelcase
    const userId = this.props.form.getFieldValue('user_id');
    const invitedCode = this.props.form.getFieldValue('invited_code');
    this.setState(
      {
        searchKey: {
          ...this.state.searchKey,
          user_id: userId,
          invited_code: invitedCode,
          pageNo: 1,
        },
      },
      () => {
        this.getData();
      },
    );
  };

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
        title: '用户id',
        dataIndex: 'user_id',
        key: 'user_id',
      },
      {
        title: '用户昵称',
        dataIndex: 'nickname',
        key: 'nickname',
      },
      {
        title: '用户来源',
        dataIndex: 'user_source',
        key: 'user_source',
      },
      {
        title: '用户状态',
        dataIndex: 'user_status',
        key: 'user_status',
        render: text => (text === '1' ? '正常' : '冻结'),
      },
      {
        title: '用户收益',
        dataIndex: 'bonus',
        key: 'bonus',
      },
      {
        title: '用户等级',
        dataIndex: 'user_level',
        key: 'user_level',
      },
      {
        title: '用户品牌',
        dataIndex: 'brand',
        key: 'brand',
      },
      {
        title: '用户型号',
        dataIndex: 'model',
        key: 'model',
      },
      {
        title: '最后登陆时间',
        dataIndex: 'last_login_time',
        key: 'last_login_time',
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
      },
    ];
  }

  render() {
    const {
      listResult,
    } = this.state;
    // for detail
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    return (
      <div className="page page-scrollfix page-usermanage">
        <Layout>
          <Layout className="page-body">
            <Content>
              <div className="page-header">
                <div className="layout-between">
                  <Form className="flexrow" onSubmit={this.handleSearch}>
                    <FormItem labelCol={{ span: 12 }} wrapperCol={{ span: 12 }} label="用户Id" style={{ width: '200px' }}>
                      {getFieldDecorator('user_id')(<Input />)}
                    </FormItem>
                    <FormItem labelCol={{ span: 12 }} wrapperCol={{ span: 12 }} label="用户邀请码" style={{ width: '200px' }}>
                      {getFieldDecorator('invited_code')(<Input />)}
                    </FormItem>
                    <Button type="primary" htmlType="submit">
                      搜索
                    </Button>
                  </Form>
                </div>
              </div>
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
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
