// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { Button, Checkbox, Form, Input } from "antd";
// import axios from "axios";
// import toast from "react-hot-toast";

// interface Story {
//   title: string;
//   author: string;
//   image: string;
//   description: string;
//   date: string;
//   active: boolean;
// }

// export default function StoryForm() {
//   const qc = useQueryClient();
//   const { mutate, isSuccess, isPending } = useMutation({
//     mutationFn: async (values: Story) => {
//       await axios.post("http://localhost:3000/stories", values);
//     },
//     onSuccess: () => {
//       toast.success("Thêm truyện thành công");
//       qc.invalidateQueries({ queryKey: ["getAllStories"] });
//     },
//     onError: () => {
//       toast.error("Có lỗi xảy ra");
//     },
//   });

//   const onFinish = async (values: Story) => {
//     mutate(values);
//   };

//   return (
//     <Form layout="vertical" onFinish={onFinish} disabled={isPending}>
//       <Form.Item label="Title" name="title" rules={[{ required: true, message: "Bắt buộc"}]}>
//         <Input />
//       </Form.Item>
//       <Form.Item label="Author" name="author">
//         <Input />
//       </Form.Item>
//       <Form.Item label="Image" name="image">
//         <Input />
//       </Form.Item>
//       <Form.Item label="Description" name="description">
//         <Input.TextArea />
//       </Form.Item>
//       <Form.Item label="Date" name="date">
//         <Input type="date" />
//       </Form.Item>
//       <Form.Item label="Active" name="active" valuePropName="checked">
//         <Checkbox>Active</Checkbox>
//       </Form.Item>
      
//       <Button htmlType="submit" loading={isPending} type="primary">
//         {isPending ? "Submitting..." : "Submit"}
//       </Button>

//       {isSuccess && <p>Thêm truyện thành công !</p>}
//     </Form>
//   );
// }