import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import blogPost from "../data/blog.json";
import { NavLink } from "react-router-dom";
/**
 * @author
 * @function AboutUs
 **/

const AboutUs = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);
  console.log(posts);
  return (
    <Layout>
      <div className="blogPostContainer">
        <Card
          style={{
            marginBottom: "20px",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div className="recentPosts">
            {posts.map((post) => {
              return (
                <div>
                  <img
                    alt=""
                    src={require("../blogPostImages/" + post.blogImage)}
                    width="100%"
                    height="400px"
                  />
                  <NavLink key={post.id} to={`/post/${post.slug}`}>
                    <div className="recentPost">
                      <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default AboutUs;
