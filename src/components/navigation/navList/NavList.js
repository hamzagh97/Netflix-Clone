import React from "react";
import classes from "./NavList.module.css";
import { NavLink } from "react-router-dom";

export const NavList = () => {
  return (
    <div className={classes["nav-list"]}>
      <ul>
        <NavLink to={"/"}>
          <li className={classes.active}>Home</li>
        </NavLink>
        <NavLink>
          <li className={classes.active}>TV Shows</li>
        </NavLink>
        <NavLink>
          <li className={classes.active}>Movies</li>
        </NavLink>
        <NavLink>
          <li className={classes.active}>Latest</li>
        </NavLink>
        <NavLink to={"/my-list"}>
          <li className={classes.active}>My List</li>
        </NavLink>
        <NavLink>
          <li className={classes.active}>Browse by Languages</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavList;
