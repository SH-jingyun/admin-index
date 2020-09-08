import React, { Component } from 'react';
import {
  Button,
  Form, Layout, Select, message, Upload, Icon, Input, Checkbox,
} from 'antd';
import {
  tqwUploadImg,
} from '@apis/manage';
import { adminUrl } from '@config';
import { browserHistory } from "react-router";

const FormItem = Form.Item
const { Content } = Layout;
const { Option } = Select;

@Form.create({})
// 声明组件  并对外输出
export default class app extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props);
    this.state = {
      listResult: { type: [{ key: '1', value: '晴' }, { key: '2', value: '阴' }, { key: '3', value: '雨' }] },
    };
  }

  // 组件即将加载
  componentWillMount() {
    // this.setState(() => {
    //   this.getData();
    // });
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

    dateChange = (dates, dateStrings) => {
      this.state.searchKey.dateRange = dateStrings;
    };

    handleChange(value) {
      console.log(value);
    }


    render() {
      const {
        listResult,
      } = this.state;
      const { getFieldDecorator } = this.props.form
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };

      const uploadApp = {
        accept: '.jpg,.png,.gif,.jfif,.jpeg',
        name: 'file',
        action: `${adminUrl}/admin/base/upload`,
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
      const onFinish = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
          if (error) { return false; }
          tqwUploadImg({ ...values }, () => {
            message.success('操作成功');
            // browserHistory.push('/');
          });
        });
      }

      return (
        <div className="page page-scrollfix page-usermanage">
          <Layout>
            <Layout className="page-body">
              <Content>
                <div className="modalcontent">
                    上传图片
                  <Form layout="horizontal" onSubmit={onFinish} >
                    <FormItem {...formItemLayout} label="图片" > {getFieldDecorator('img')(<Upload {...uploadApp}> <Button> <Icon type="upload" /> Click to Upload </Button> </Upload>)} </FormItem>
                    <FormItem {...formItemLayout} label="天气类型" >{getFieldDecorator('type')(<Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="请选择天气"
                      onChange={this.handleChange}
                    >
                      {listResult.type.map(item => <Option value={item.key.toString()} key={item.key.toString()} selected>{item.value}</Option>)}
                    </Select>)}
                    </FormItem>
                    <FormItem {...formItemLayout}> <Button type="primary" htmlType="submit"> Submit </Button> </FormItem>
                  </Form>
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      );
    }
}

