import React from 'react'
const {Header, Sider,Content } = Layout
import { Layout } from 'antd'

function Dashboard() {
  return (
     <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", backgroundColor: "#001529", fontSize: "20px" }}>
        My Dashboard
      </Header>
      
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <div style={{ padding: "20px", fontWeight: "bold" }}>Header</div>
          <div style={{ padding: "20px", fontWeight: "bold" }}>Sidebar</div>
          <div style={{ padding: "20px", fontWeight: "bold" }}>Content</div>
        </Sider>
        <Content style={{ padding: "24px", backgroundColor: "#f5f5f5" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            Đây là nội dung chính của Dashboard.
          </div>
        </Content>
      </Layout>
      
    </Layout>
  )
}

export default Dashboard