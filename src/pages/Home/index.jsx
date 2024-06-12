import { Layout } from "antd";
import { useState } from "react";
import SearchBar from "../../components/SearchBar.jsx";
import VideoContent from "../../components/VideoContent.jsx";

export default function Home() {
  const { Header, Content } = Layout;

  const [videoList, setVideoList] = useState([]);

  return (
    <Layout style={{ borderRadius: 6, overflow: "scroll" }}>
      <Layout>
        <Header
          style={{
            position: "fixed",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchBar />
        </Header>
        <Content style={{ marginTop: 60, width: "100%" }}>
          <VideoContent list={videoList} setList={setVideoList} />
        </Content>
      </Layout>
    </Layout>
  );
}
