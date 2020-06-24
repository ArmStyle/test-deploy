import React from "react";
// import Card from '../../components/UI/Card';
import BlogPost from "../components/BlogPost.js";
// import Sidebar from '../../components/Sidebar';
import Footer from "../components/Footer.js";

/**
 * @author
 * @function Post
 **/

const Post = (props) => {
  console.log(props);

  return (
    <Footer>
      <BlogPost {...props} />
    </Footer>
  );
};

export default Post;
