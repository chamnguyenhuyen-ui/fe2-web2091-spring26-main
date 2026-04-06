import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Layout, Form, Input, Button } from "antd";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import StudentTable from "./pages2/StudentTable";
// import ProductTable from "./pages2/ProductTable";
// import UserTable from "./pages2/UserTable";
// import Login from "./pages3/Login";
// import Product from "./pages3/Product";
// import Lab4 from "./pages4/Lab4";
// import StoryList from "./pages4/Lab5";
// import { EditStory } from "./pages4/Lab6";
import Navbar from "./components/Header";

// const { Header, Content, Footer } = Layout;

function App() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
     < Navbar />
      {/* <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/product">Lab3</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login">Đăng nhập</Link>
            <Link to="/register">Đăng ký</Link>
          </div>
          
        </div>
      </nav> */}

      <Routes>
        {/* Trang chủ */}
        <Route
          path="/"
          element={
            <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Chào mừng đến với WEB2091
              </h1>

              {/* <div className="my-4 space-x-2">
                <Button type="primary">Click me</Button>
                <Button type="default">Click me</Button>
                <Button type="dashed">Click me</Button>
              </div> */}

              <Layout className="my-8 text-left">
                {/* <Header style={{ color: "white" }}>Header</Header> */}

                {/* <Content style={{ padding: 20 }}> */}
                  {/* <Form onFinish={onFinish}>
                    <Form.Item
                      name="email"
                      rules={[{ required: true, message: "Nhập email" }]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item>
                      <Button htmlType="submit" type="primary">
                        Login
                      </Button>
                    </Form.Item>
                  </Form> */}
                  {/* <StudentTable /> */}
                  {/* <ProductTable /> */}
                  {/* <UserTable /> */}
                  {/* <Lab4 />
                  <StoryList />
                  <EditStory />
                   */}

                {/* </Content> */}

                {/* <Footer style={{ textAlign: "center", background: "#001529", color: "#fff", padding: "15px" }}>
                  Copyright © 2026 WEB2091 
                </Footer> */}
              </Layout>
            </div>
          }
        />

        {/* Dashboard */}
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/product" element={<Product />} /> */}
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;