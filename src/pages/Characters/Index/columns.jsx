import React from "react";
import { Button, Tag, Space } from "antd";
import { Link } from "react-router-dom";

export const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => {
      let color =
        status === "Alive" ? "green" : status === "Dead" ? "red" : "blue";
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Species",
    key: "species",
    dataIndex: "species",
    /**/
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Link to={`/show/${record.id}`}>
        <Button
          style={{ backgroundColor: "#3ec9a7", color: "#ffffff" }}
          size="middle"
        >
          Details
        </Button>
      </Link>
    ),
  },
];

export const columnsMobile = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => {
      let color =
        status === "Alive" ? "green" : status === "Dead" ? "red" : "blue";

      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Link to={`/show/${record.id}`}>
        <Button
          style={{ backgroundColor: "#3ec9a7", color: "#ffffff" }}
          size="middle"
        >
          Details
        </Button>
      </Link>
    ),
  },
];
