import React, { Component } from 'react';
import {
  Button, Form, Layout, Input, message, Select, Upload, Icon,
} from 'antd';
import TableList from '@tableList';
import Drawer from '@components/draw/draw'
import {
  fetchAd,
  fetchAdDetail,
} from '@apis/manage';
import { mockURL } from '@config';

const FormItem = Form.Item

const { Content } = Layout;
const { Option } = Select
//change
@Form.create({})
// 声明组件  并对外输出
export default class app extends Component {
  // 初始化页面常量 绑定事件方法
  //change
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
      forceUpdateSelect: [{ key: 1, value: '上线' }, { key: 0, value: '下线' }],
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
    fetchAd({ ...this.state.searchKey }, (res) => {
      this.setState({
        listResult: res.data,
      });
      callback && callback();
    });
  }

  handleInfo(id) {
    fetchAdDetail({ id: id }, (res) => {
      this.setState({
        detail: res.data,
        showDetail: true,
        detailId: id,
      });
    });
  }

  add() {
    this.setState({ detail: {}, showDetail: true, detailId: 0 });
  }

  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (error) { return false; }
      fetchAdDetail({ ...value, id: this.state.detailId, action: 'edit' }, () => {
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
  //change
  renderColumn() {
    return [
      {
        title: '名称',
        dataIndex: 'advertise_name',
        key: 'advertise_name',
      },
      {
        title: '类型',
        dataIndex: 'advertise_type',
        key: 'advertise_type',
      },
      {
        title: '图片',
        dataIndex: 'advertise_image',
        key: 'advertise_image',
        render: (text) => (text ? <img class="auto_img" src={mockURL + "/" + text} /> : ""),
      },
      {
        title: '跳转链接',
        dataIndex: 'advertise_url',
        key: 'advertise_url',
        render: (text, record) => (record.advertise_type == 'web' ? <a href={text} target='__blank'>{text}</a> : ""),
      },
      {
        title: '显示位置',
        dataIndex: 'advertise_location',
        key: 'advertise_location',
      },
      {
        title: '状态',
        dataIndex: 'advertise_status',
        key: 'advertise_status',
        render: (text) => (text == 1 ? '在线' : '下线'),
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
          <span>
            <span>
              <a onClick={() => this.handleInfo(record.advertise_id)}>详情</a>
            </span>
          </span>
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
    const uploadImg = {
      accept: '.jpg,.png,.gif',
      name: 'file',
      action: `${mockURL}/admin-base/upload`,
      //        headers: {
      //          authorization: 'authorization-text',
      //        },
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
    //    let {fileList} = this.state;

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
              <div className="page-footer">
                <div className="page-footer-buttons">
                  <Button
                    type="primary"
                    style={{ marginRight: '10px' }}
                    onClick={() => this.add()}
                  >
                    {' '}
                      添加运营位
                  </Button>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
        {this.state.showDetail ? (<Drawer
          visible
          title={this.state.detailId ? '详情' : '新增'}
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
              <FormItem {...formItemLayout} label="名称" hasFeedback>
                {getFieldDecorator('advertise_name', {
                  initialValue: this.state.detail.advertise_name || '',
                  rules: [{ required: true, message: '请输入名称' }],
                })(<Input placeholder="请输入名称" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="类型" hasFeedback>
                {getFieldDecorator('advertise_type', {
                  initialValue: `${this.state.detail.advertise_type || ''}`,
                  rules: [{ required: true, message: '请输入类型' }],
                })(<Input placeholder="请输入类型" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="图片" hasFeedback>
                {getFieldDecorator(
                  'advertise_image', {
//                  rules: [{ required: true, message: '请上传图片' }],
                }
                )(<Upload {...uploadImg}>
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>)}
              </FormItem>
              <FormItem {...formItemLayout} label="链接" hasFeedback>
                {getFieldDecorator('advertise_url', {
                  initialValue: `${this.state.detail.advertise_url || ''}`,
                  rules: [{ required: true, message: '请输入链接' }],
                })(<Input placeholder="请输入链接" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="显示位置" hasFeedback>
                {getFieldDecorator('advertise_location', {
                  initialValue: `${this.state.detail.advertise_location || ''}`,
                  rules: [{ required: true, message: '请选择显示位置' }],
                })(<Input placeholder="请输入链接" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="状态" hasFeedback>
                {getFieldDecorator('advertise_status', {
                  initialValue: `${this.state.detail.advertise_status || ''}`,
                  rules: [{ required: true, message: '请选择状态' }],
                })(<Select placeholder="请选择状态" size="large" >
                  {forceUpdateSelect.map(item => <Option value={item.key.toString()} key={item.key.toString()} selected>{item.value}</Option>)}
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
