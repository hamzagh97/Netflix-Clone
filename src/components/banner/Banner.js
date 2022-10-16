import React from "react";
import classes from "./Banner.module.css";
import Info from "./info/Info";
import banner3 from "../../assests/images/banner3.jpg";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <img src={banner3} alt="banner" />
      <div className={classes.overlay}></div>
      <Info />
    </div>
  );
};

export default Banner;
