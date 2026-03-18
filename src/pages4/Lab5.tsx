import { useQuery } from "@tanstack/react-query";
import { Image, Table } from "antd";
import axios from "axios";
export default function StoryList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllStories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });
  const columns = [
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
     {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      render: (src: string) => <Image src={src} height={100} />,
    },
    {
        title: "Ngày tạo",
        dataIndex: "date",
        // render: (date: string) =>
    }
  ];

  if (isError) {
    return <div>Có lỗi xảy ra</div>;
  }
  return <Table columns={columns} dataSource={data} loading={isLoading} />;
}