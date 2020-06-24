import React from "react";
import Layout from "../components/Layout";
/**
 * @author
 * @function ContactUS
 **/

const ContactUS = (props) => {
  return (
    <Layout>
      <div className="contactContainer">
        <div className="contact">
          <div>
            <label for="name">Name</label>
            <input type="text" placeholder="Your name.."></input>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="text" placeholder="Your Email.."></input>
          </div>
          <div>
            <label for="message">Message</label>
            <input type="text" placeholder="Your Message.."></input>
          </div>
          <input type="submit" value="Submit"></input>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUS;
