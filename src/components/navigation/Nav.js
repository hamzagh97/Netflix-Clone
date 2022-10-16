import React, { useState, useEffect } from "react";
import classes from "./Nav.module.css";
import logo from "../../assests/images/logo/netflix-logo.png";
import NavList from "./navList/NavList";
import Menu from "./navMenu/Menu";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [isScrolled, setNavState] = useState(false);
  const content = `${classes.nav} ${isScrolled ? `${classes.scrolled}` : ""}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener("scroll", () => {
        setNavState(window.scrollY >= 1);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isScrolled]);

  return (
    <div className={content}>
      <Link to="/" className={classes.logo}>
        netlefix
      </Link>
      <NavList />
      <Menu />
    </div>
  );
};

export default Nav;
