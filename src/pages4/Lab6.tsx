// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"; 
// import { Button, Form, Input, message } from "antd"; 
// import axios from "axios";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 

// export function EditStory() {
//   const queryClient = useQueryClient(); 
//   const navigate = useNavigate(); 
//   const id = 1; 

//   const { data, isLoading } = useQuery({
//     queryFn: async () => {
//       const res = await axios.get(`http://localhost:3000/stories/${id}`);
//       return res.data;
//     },
//     queryKey: ["story", id],
//   });

//   const [form] = Form.useForm();
  
//   useEffect(() => {
//     if (data) {
//       form.setFieldsValue(data);
//     }
//   }, [data, form]);
  
//   const mutation = useMutation({
//     mutationFn: async (values: any) => {
//       return axios.put(`http://localhost:3000/stories/${id}`, values);
//     },
//     onSuccess: () => {
//       message.success("Cập nhật truyện thành công!");
//       queryClient.invalidateQueries({ queryKey: ["stories"] });
//       navigate("/");
//     },
//   });
  
//   const onFinish = (values: any) => {
//     mutation.mutate(values);
//   };

//   return (
//     <Form layout="vertical" form={form} onFinish={onFinish} disabled={isLoading || mutation.isPending} 
//     >
//       <Form.Item label="Tên truyện" name="title">
//         <Input />
//       </Form.Item>
//       <Form.Item label="Tác giả" name="author">
//         <Input/>
//       </Form.Item>
//       <Form.Item label="Mô tả" name="description">
//         <Input.TextArea/>
//       </Form.Item>
//       <Form.Item label="Hình ảnh" name="image">
//         <Input/>
//       </Form.Item>
//       <Form.Item label="Ngày tạo" name="date">
//         <Input type="date"/>
//       </Form.Item>
//       <Button htmlType="submit" type="primary" loading={mutation.isPending}
//       >
//         Submit
//       </Button>
//     </Form>
//   );
// }