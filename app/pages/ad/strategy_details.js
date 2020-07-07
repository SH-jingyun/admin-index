import React, { Component } from 'react';
import {
  Button, Form, Layout, Input, message, Select, Upload, Icon, Popconfirm,
} from 'antd';
import {
  adStrategyDetail,
} from '@apis/manage';

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
      listResult: { details: {}, position: {}, user: {} },
      isLoad: false,
    };
  }

  // 组件即将加载
  componentWillMount() {
    this.getData();
  }

  // 组件已经加载到dom中
  //  componentDidMount() {
  //    this.props.form.setFieldsValue({ key: '' });
  //  }

  // 获取活动列表数据
  getData(callback) {
    adStrategyDetail({ id: this.props.params.id }, (res) => {
      this.setState({
        listResult: res.data,
        isLoad: true,
      });
      callback && callback();
    });
  }

  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (error) { return false; }
      adStrategyDetail({ ...value, id: this.props.params.id, action: 'edit' }, () => {
        message.success('操作成功');
        // 新增成功
        this.setState({
          showDetail: false,
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

  render() {
    const { details, position, user } = this.state.listResult
    // for detail
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 12 },
    };

    return (
      this.state.isLoad ? (
        <div className="modalcontent">
          <Form layout="horizontal">
            <FormItem {...formItemLayout} label="广告策略名称" hasFeedback>
              {getFieldDecorator('strategy_name', {
                initialValue: details.strategy_name || '',
                rules: [{ required: true, message: '请输入广告策略名称' }],
              })(<Input placeholder="请输入广告策略名称" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="广告位" hasFeedback>
              {getFieldDecorator('position_id', {
                initialValue: `${details.position_id || ''}`,
                rules: [{ required: true, message: '请选择广告位' }],
              })(<Select placeholder="请选择广告位" size="large" >
                {position.map(item => <Option value={item.id.toString()} key={item.id.toString()} selected>{item.name}</Option>)}
              </Select>)}
            </FormItem>
            <FormItem {...formItemLayout} label="用户分群" hasFeedback>
              {getFieldDecorator('group_id', {
                initialValue: `${details.group_id || ''}`,
                rules: [{ required: true, message: '请选择用户分群' }],
              })(<Select placeholder="请选择用户分群" size="large" >
                {user.map(item => <Option value={item.id.toString()} key={item.id.toString()} selected>{item.name}</Option>)}
              </Select>)}
            </FormItem>
            <FormItem {...formItemLayout} label="用户分群" hasFeedback>
              {getFieldDecorator('source[]', {
                initialValue: `${details.group_id || ''}`,
                rules: [{ required: true, message: '请选择用户分群' }],
              })(<Select placeholder="请选择用户分群" size="large" >
                {user.map(item => <Option value={item.id.toString()} key={item.id.toString()} selected>{item.name}</Option>)}
              </Select>)}
              {getFieldDecorator('type[]', {
                initialValue: `${details.group_id || ''}`,
                rules: [{ required: true, message: '请选择用户分群' }],
              })(<Select placeholder="请选择用户分群" size="large" >
                {user.map(item => <Option value={item.id.toString()} key={item.id.toString()} selected>{item.name}</Option>)}
              </Select>)}
            </FormItem>
            <Button onClick={() => this.handleChange()}>确定</Button>
          </Form>
        </div>) : null
    );
  }
}
