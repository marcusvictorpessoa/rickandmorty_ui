import React from "react";

import { Layout, Spin, Typography } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function Loading() {
  const Icon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
        color: "#000000",
      }}
      spin
    />
  );

  return (
    <Layout
      style={{
        display: "flex",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        width: "100%",
      }}
    >
      <Spin indicator={Icon} />
      <Text style={{ color: "#000000", fontSize: 18, marginTop: 10 }}>
        Aguarde...
      </Text>
    </Layout>
  );
}