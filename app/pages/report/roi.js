import React, { Component } from 'react';
import {
  Button,
  Form, Input, Layout, Select,
} from 'antd';
import TableList from '@tableList';
import {
  reportRoi,
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
        advertiser_id: 0,
        ad_id: 0,
        pageSize: 10,
        pageNo: 1,
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
    // 搜索
    handleSearch = (e) => {
      e.preventDefault();
      const advertiserId = this.props.form.getFieldValue('advertiser_id');
      const adId = this.props.form.getFieldValue('ad_id');
      this.setState(
        {
          searchKey: {
            ...this.state.searchKey,
            advertiser_id: advertiserId,
            ad_id: adId,
            pageNo: 1,
          },
        },
        () => {
          this.getData();
        },
      );
    };

  // 获取活动列表数据
    getData(callback) {
      reportRoi({ ...this.state.searchKey }, (res) => {
        this.setState({
          listResult: res.data,
        });
        callback && callback();
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
          title: '日期',
          dataIndex: 'report_date',
          key: 'report_date',
        },
        {
          title: '广告主Id',
          dataIndex: 'advertiser_id',
          key: 'advertiser_id',
        },
        {
          title: '广告计划ID',
          dataIndex: 'ad_id',
          key: 'ad_id',
        },
        {
          title: '新增（推广）',
          dataIndex: 'new_user_ocean',
          key: 'new_user_ocean',
        },
        {
          title: '新增（变现）',
          dataIndex: 'new_user_topon',
          key: 'new_user_topon',
        },
        {
          title: 'roi1',
          dataIndex: 'roi_1',
          key: 'roi_1',
        },
        {
          title: 'roi2',
          dataIndex: 'roi_2',
          key: 'roi_2',
        },
        {
          title: 'roi3',
          dataIndex: 'roi_3',
          key: 'roi_3',
        },
        {
          title: 'roi4',
          dataIndex: 'roi_4',
          key: 'roi_4',
        },
        {
          title: 'roi5',
          dataIndex: 'roi_5',
          key: 'roi_5',
        },
        {
          title: 'roi6',
          dataIndex: 'roi_6',
          key: 'roi_6',
        },
        {
          title: 'roi7',
          dataIndex: 'roi_7',
          key: 'roi_7',
        },
        {
          title: 'roi8',
          dataIndex: 'roi_8',
          key: 'roi_8',
        },
        {
          title: 'roi9',
          dataIndex: 'roi_9',
          key: 'roi_9',
        },
        {
          title: 'roi10',
          dataIndex: 'roi_10',
          key: 'roi_10',
        },
        {
          title: 'roi_14',
          dataIndex: 'roi_14',
          key: 'roi_14',
        },
        {
          title: 'roi_30',
          dataIndex: 'roi_30',
          key: 'roi_30',
        },
      ];
    }

    render() {
      const {
        listResult,
      } = this.state;
      const { getFieldDecorator } = this.props.form

      return (
        <div className="page page-scrollfix page-usermanage">
          <Layout>
            <Layout className="page-body">
              <Content>
                <div className="page-header">
                  <div className="layout-between">
                    <Form className="flexrow" onSubmit={this.handleSearch}>
                      <FormItem labelCol={{ span: 12 }} wrapperCol={{ span: 12 }} label="广告主id" style={{ width: '200px' }}>
                        {getFieldDecorator('advertiser_id')(<Input />)}
                      </FormItem>
                      <FormItem labelCol={{ span: 12 }} wrapperCol={{ span: 12 }} label="广告计划id" style={{ width: '200px' }}>
                        {getFieldDecorator('ad_id')(<Input />)}
                      </FormItem>
                      {/* <FormItem labelCol={{ span: 12 }} wrapperCol={{ span: 12 }} label="日期" style={{ width: '200px' }}> */}
                      {/*  {getFieldDecorator('invited_code')(<Input />)} */}
                      {/* </FormItem> */}
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
