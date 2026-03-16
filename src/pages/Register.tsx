import React from 'react'
import { Form, Input, Button } from "antd";

function Register() {
  const onFinish = (values: any) => {
    console.log("Dữ liệu đăng ký:", values);
  };

  return (
    <Form
      name="register_lab3"
      onFinish={onFinish}
      layout="vertical"
      style={{
        maxWidth: 400,
        margin: "30px auto",
        padding: 24,
        border: "1px solid #f0f0f0",
        borderRadius: 8,
        background: "#fff shadow-sm"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Đăng Ký</h2>

      <Form.Item label="Name" name="name" rules={[{ required: true, message: "Nhập tên!" }]}>
        <Input placeholder="Nguyễn Văn A" />
      </Form.Item>
      <Form.Item 
        label="Email" 
        name="email" 
        rules={[
          { required: true, message: "Nhập email!" },
          { type: 'email', message: 'Email không đúng định dạng!' }
        ]}
      >
        <Input placeholder="nguyenvana@gmail.com" />
      </Form.Item>

      <Form.Item label="Phone" name="phone" rules={[{ required: true, message: "Nhập số điện thoại!" }]}>
        <Input placeholder="0987xxx" />
      </Form.Item>

      <Form.Item 
        label="Password" 
        name="password" 
        rules={[
          { required: true, message: "Nhập mật khẩu!" },
          { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' }
        ]}
      >
        <Input.Password placeholder="Mật khẩu" />
      </Form.Item>

      <Form.Item 
        label="Confirm Password" 
        name="confirm" 
        dependencies={['password']}
        rules={[
          { required: true, message: "Xác nhận lại mật khẩu!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Nhập lại mật khẩu" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Đăng Ký
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Register;