import React from "react";
import { Table } from "antd";

const ProductTable = () => {
  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Product Name", dataIndex: "name" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];

  const data = [
    { id: 1, name: "iPhone 15", price: "20.000.000", category: "Phone" },
    { id: 2, name: "Macbook M3", price: "35.000.000", category: "Laptop" },
    { id: 3, name: "iPad Pro", price: "25.000.000", category: "Tablet" },
    { id: 4, name: "Apple Watch", price: "10.000.000", category: "Watch" },
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      rowKey="id" 
      pagination={{ pageSize: 3 }} 
    />
  );
};

export default ProductTable;