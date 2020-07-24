import React, {Component} from 'react'
import {Form, Input, Button} from 'antd'

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
}
const tailLayout = {
  wrapperCol: {offset: 8, span: 16},
}

export class LoginPage extends Component {
  render() {
    const onFinish = (body: any) => {
      console.log('Success:', body)
      fetch('/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {})
    }
    return (
      <Form {...layout} name="basic" initialValues={{}} onFinish={onFinish}>
        <Form.Item label="Email" name="email" rules={[{required: true, message: 'Please input your email!'}]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please input your password!'}]}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
