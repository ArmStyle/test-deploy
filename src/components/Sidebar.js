import React, { useState, useEffect } from "react";
import Card from "./Card";

import blogPost from "../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Sidebar
 **/

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      className="sidebarContainer"
      style={{
        width: props.width,
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.0-9/81130929_3584974408211575_3392099646359732224_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeGF4rTMIheTextPLCBsXw8kzse0wwAkpeHOx7TDACSl4cO1rvnzsjltKMquYn_9P2TMbH0pfx-dTSHD8xx-4tJi&_nc_oc=AQke2WfwYxpKRvcXZ2pT5YVzy8laNKOTUtXTUmhurSaj5s-w5BxVLg88TK4UmMjSPxw&_nc_ht=scontent.fbkk6-1.fna&oh=ee99ebffc9a0152a0ecdab6c9e26a4bc&oe=5F169A9A"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            My name is Siriwut Netwichian I am a software developer
            specialization in Front end developement....:)
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
        <div className="cardBody">
          <p className="personalBio">Facebook : Siriwut Netwichian</p>
          <p className="personalBio">IG : ArmSiri</p>
          <p className="personalBio">Twitter : Mr.ArmStyle</p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
