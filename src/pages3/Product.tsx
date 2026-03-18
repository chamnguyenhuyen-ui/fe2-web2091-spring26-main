// import React from "react";
// import { Form, Input, InputNumber, Button, Card } from "antd";

// function Product() {
//   const onFinish = (values: any) => {
//     // Yêu cầu: Submit -> console log dữ liệu
//     console.log("Dữ liệu Sản Phẩm Bài 3:", values);
//   };

//   return (
//     <Card 
//       title={<h2 style={{ textAlign: "center", margin: 0 }}>Bài 3: Quản Lý Sản Phẩm</h2>}
//       style={{ maxWidth: 500, margin: "30px auto", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
//     >
//       <Form
//         name="product_form"
//         onFinish={onFinish}
//         layout="vertical"
//       >
//         {/* Field: Tên sản phẩm */}
//         <Form.Item 
//           label="Tên sản phẩm" 
//           name="name" 
//           rules={[{ required: true, message: "Tên sản phẩm không được để trống!" }]}
//         >
//           <Input placeholder="Nhập tên sản phẩm" />
//         </Form.Item>

//         {/* Field: Giá */}
//         <Form.Item 
//           label="Giá sản phẩm" 
//           name="price" 
//           rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
//         >
//           <InputNumber 
//             style={{ width: "100%" }} 
//             min={0} 
//             placeholder="0"
//             formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//           />
//         </Form.Item>

//         {/* Field: Số lượng */}
//         <Form.Item 
//           label="Số lượng" 
//           name="quantity" 
//           rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
//         >
//           <InputNumber style={{ width: "100%" }} min={1} placeholder="1" />
//         </Form.Item>

//         {/* Field: Mô tả */}
//         <Form.Item label="Mô tả sản phẩm" name="description">
//           <Input.TextArea rows={4} placeholder="Nhập chi tiết về sản phẩm..." />
//         </Form.Item>

//         <Form.Item style={{ marginBottom: 0 }}>
//           <Button type="primary" htmlType="submit" block size="large">
//             Gửi dữ liệu (Submit)
//           </Button>
//         </Form.Item>
//       </Form>
//     </Card>
//   );
// }

// export default Product;