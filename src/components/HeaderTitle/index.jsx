import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const titleStyle = {
  color: "#fff",
  fontSize: 30,
};

function HeaderTitle() {
  return (
    <Title style={titleStyle}>Rick & Morty</Title>
  );
}
export default HeaderTitle;
