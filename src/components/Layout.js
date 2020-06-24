import React from "react";
import Sidebar from "./Sidebar";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="layout">
        {props.children}
        <Sidebar />
      </div>
    </React.Fragment>
  );
};

export default Layout;
