import React from "react";
import { Table, Tag, Button, Space } from "antd";

const UserTable = () => {
  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { 
      title: "Status", 
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>{status}</Tag>
      )
    },
    { 
      title: "Action", 
      render: () => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>Delete</Button>
        </Space>
      )
    },
  ];

  const data = [
    { id: 1, name: "Châm,", email: "cham@gmail.com", status: "active" },
    { id: 2, name: "Thảo", email: "thao@gmail.com", status: "inactive" },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default UserTable;