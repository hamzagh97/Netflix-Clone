import React from "react";
import Nav from "../navigation/Nav";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>;
      <Footer />
    </>
  );
};

export default Layout;
