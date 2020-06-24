import React from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import RecentPosts from "./RecentPosts";
import { Link } from "react-router-dom";
import blogData from "../data/blog.json";
import Layout from "../components/Layout";

const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="" />
    </div>
  );
};

const ImageGallary = (props) => (
  <div className="gallaryPost" style={props.gallaryStyle}>
    <section style={{ width: props.largeWidth }}>
      <div className="mainImageWrapper">
        <Link to={"/post/" + props.dataArray[4].slug}>
          <img
            src={require("../blogPostImages/" + props.imagesArray[4])}
            alt=""
          />
        </Link>
      </div>
    </section>
    <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
      {props.dataArray.map((data) => (
        <Link to={"/post/" + data.slug}>
          <SideImage
            key={data.id}
            height={props.sideImageHeight}
            src={require("../blogPostImages/" + data.blogImage)}
            alt=""
          />
        </Link>
      ))}
    </section>
  </div>
);

const Home = (props) => {
  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + "px",
    overflow: "hidden",
  };
  const sideImageHeight = gallaryHeight / 3;
  const imgAr = blogData.data.map((post) => post.blogImage);
  const dataAr = blogData.data;
  console.log(dataAr);
  return (
    <div>
      <Card>
        <ImageGallary
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          gallaryStyle={gallaryStyle}
          imagesArray={imgAr}
          dataArray={dataAr}
        />
      </Card>
      <Layout>
        <RecentPosts style={{ width: "70%" }} />
      </Layout>
    </div>
  );
};

export default Home;
