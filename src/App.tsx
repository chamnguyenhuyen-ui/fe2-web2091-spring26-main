import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Layout, Form, Input, Button, Table } from "antd";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const { Header, Content, Footer } = Layout;

function App() {

  const onFinish = (values: any) => {
    console.log(values);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
      key: "major",
    },
  ];

  const data = [
    {
      id: 1,
      name: "Nguyen Van A",
      age: 20,
      major: "Lập trình Mobile",
    },
    {
      id: 2,
      name: "Tran Thi B",
      age: 21,
      major: "Phát triển phần mềm",
    },
    {
      id: 3,
      name: "Le Van C",
      age: 19,
      major: "Lập trình Web",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#">Đăng nhập</Link>
            <Link to="/register">Đăng ký</Link>
          </div>
        </div>
      </nav>

      <Routes>

        {/* Trang chủ */}
        <Route
          path="/"
          element={
            <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Chào mừng đến với WEB2091
              </h1>

              <div className="my-4 space-x-2">
                <Button type="primary">Click me</Button>
                <Button type="default">Click me</Button>
                <Button type="dashed">Click me</Button>
              </div>

              <Layout className="my-8 text-left">
                <Header style={{ color: "white" }}>Header</Header>

                <Content style={{ padding: 20 }}>
                  <Form onFinish={onFinish}>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Nhập email" },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item>
                      <Button htmlType="submit" type="primary">
                        Login
                      </Button>
                    </Form.Item>
                  </Form>              <Table
                columns={columns}
                dataSource={data}
                rowKey="id"
              />
                </Content>

                <Footer>Footer</Footer>
              </Layout>
            </div>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard" element={<Dashboard/>}/>

        <Route path="/register" element={<Register />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;