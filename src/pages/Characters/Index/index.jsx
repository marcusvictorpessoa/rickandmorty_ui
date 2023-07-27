import React, { useEffect, useRef, useState } from "react";
import { App, Space, Table, Tag, Pagination, Typography, Button } from "antd";
import { getIndexCharacters } from "../../../services/requests";
import { useMediaQuery } from "react-responsive";

import { columns, columnsMobile } from "./columns";

import { v4 as uuidv4 } from "uuid";
import Loading from "../../../components/Loading";

const { Title } = Typography;

function IndexPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [total, setTotal] = useState(0);
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { notification } = App.useApp();

  async function indexCharacters(page) {
    localStorage.setItem("@app.page", page);
    setLoading(true);
    try {
      const response = await getIndexCharacters("character", page);
      setTotal(response.data.info.count);
      setPage(page);
      setCharacters(
        response.data.results.map((element) => {
          return { ...element, uuid: uuidv4() };
        })
      );
    } catch (error) {
      notification.error({
        message: "Error",
        description:
          "An unexpected error occurred. please, check api base url!",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const localpage = localStorage.getItem("@app.page");
    const page = localpage ? localpage : 1;
    indexCharacters(page);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Title level={3}>Characters</Title>
      <Table
        style={{ marginTop: 20 }}
        columns={isMobile ? columnsMobile : columns}
        dataSource={characters}
        size="middle"
        rowKey={(record) => record.uuid}
        pagination={false}
      />
      <Pagination
        size={isMobile ? "small" : "default"}
        style={{ marginTop: 10 }}
        onChange={(page) => indexCharacters(page)}
        defaultCurrent={page}
        total={total}
        pageSize={20}
        showSizeChanger={false}
      />
    </>
  );
}

function Index() {
  return (
    <App>
      <IndexPage />
    </App>
  );
}
export default Index;
/*import React from 'react';



const App = () => ;
export default App;*/
