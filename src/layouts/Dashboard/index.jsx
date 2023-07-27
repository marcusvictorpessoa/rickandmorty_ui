import React from "react";
import { Layout } from "antd";
import HeaderTitle from "../../components/HeaderTitle";

const { Header, Content } = Layout;

const headerStyle = {
  color: "#fff",
  height: "10vh",
  backgroundColor: "#3ec9a7",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
};
const contentStyle = {
  textAlign: "center",
  height: "90vh",
  backgroundColor: "#eee8e8",
  padding: "1rem",
  overflowY: "auto"
};

function Dashboard({ children }) {
  return (
    <Layout>
      <Header style={headerStyle}>
        <HeaderTitle />
      </Header>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  );
}
export default Dashboard;
