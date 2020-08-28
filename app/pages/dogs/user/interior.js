import React, { Component } from 'react';
import {
  Button, Form, Layout, Input, message, Select, Upload, Icon,
} from 'antd';
import TableList from '@tableList';
import Drawer from '@components/draw/draw'
import {
  fetchInterior,
  fetchInteriorAdd,
} from '@apis/manage';
import { dogsUrl } from '@config';

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
      hasDogs: [{ key: '0', value: '没有' }, { key: '1', value: '有' }],
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
    fetchInterior({ ...this.state.searchKey }, (res) => {
      this.setState({
        listResult: res.data,
      });
      callback && callback();
    });
  }

  add() {
    this.setState({ detail: {}, showDetail: true, detailId: 0 });
  }

  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (error) { return false; }
      fetchInteriorAdd({ ...value, id: this.state.detailId, action: 'edit' }, () => {
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

    // 生成表格头部信息
    // change
    renderColumn() {
      return [
        {
          title: '用户id',
          dataIndex: 'user_id',
          key: 'user_id',
        },
        {
          title: '昵称',
          dataIndex: 'nickname',
          key: 'nickname',
        },
        {
          title: '头像',
          dataIndex: 'headimgurl',
          key: 'headimgurl',
          // eslint-disable-next-line jsx-a11y/alt-text
          render: text => (text ? <img className="auto_img" src={text} /> : ''),
        },
        {
          title: '余额',
          dataIndex: 'bonus',
          key: 'bonus',
        },
        {
          title: '分红狗数量',
          dataIndex: 'dogs_count',
          key: 'dogs_count',
        },
        // {
        //   title: '操作',
        //   key: 'operate',
        //   render: (text, record) => (
        //     <span>
        //       <span>
        //         <a onClick={() => this.handleAddBonus(record.user_id)}>添加余额</a>
        //       </span>
        //     </span>
        //   ),
        // },
      ];
    }

    render() {
      const {
        listResult,
        hasDogs,
      } = this.state;
        // for detail
      const { getFieldDecorator } = this.props.form
      const formItemLayout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 12 },
      };
      const uploadImg = {
        accept: '.jpg,.png,.gif,.jfif,.jpeg',
        name: 'file',
        action: `${dogsUrl}/admin/base/upload`,
        data: { action: 'interior' },
        onChange(info) {
          console.log(info);
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
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
                      onClick={() => this.add()}
                    >
                      {' '}
                                        添加内部用户
                    </Button>
                  </div>
                </div>
              </Content>
            </Layout>
          </Layout>
          {this.state.showDetail ? (<Drawer
            visible
            title="新增"
            onCancel={() => { this.setState({ showDetail: false }) }}
            footer={
              <div>
                <Button type="primary" onClick={this.handleSubmit.bind(this)}>确定</Button>
                <Button onClick={() => { this.setState({ showDetail: false }) }}>取消</Button>
              </div>}
            className="modal-header modal-body"
          >
            <div className="modalcontent">
              <Form layout="horizontal">
                <FormItem {...formItemLayout} label="头像" hasFeedback>
                  {getFieldDecorator('headimgurl')(<Upload {...uploadImg}>
                    <Button>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>)}
                </FormItem>
                <FormItem {...formItemLayout} label="余额" hasFeedback>
                  {getFieldDecorator('bonus', {
                    initialValue: `${this.state.detail.bonus || ''}`,
                  })(<Input placeholder="余额1000-2000" />)}
                </FormItem>
                <FormItem {...formItemLayout} label="是否有分红狗" hasFeedback>
                  {getFieldDecorator('has_dogs', {
                    initialValue: `${this.state.detail.has_dogs || ''}`,
                    rules: [{ required: true, message: '请选择是否有分红狗' }],
                  })(<Select placeholder="请选择是否有分红狗" size="large" allowClear >
                    {hasDogs.map(item => <Option value={item.key.toString()} key={item.key.toString()} selected>{item.value}</Option>)}
                  </Select>)}
                </FormItem>
              </Form>
            </div>
          </Drawer>)
            : null
          }
        </div>
      );
    }
}
