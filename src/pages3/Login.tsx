import React from "react";
import { Form, Input, Button, Card } from "antd";

const Login = () => {
  const onFinish = (v: any) => console.log(v);
  return (
    <Card title="Bài 1: Login" style={{ maxWidth: 400, margin: "auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Bắt buộc!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Bắt buộc!' }]}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>Login</Button>
      </Form>
    </Card>
  );
};
export default Login;