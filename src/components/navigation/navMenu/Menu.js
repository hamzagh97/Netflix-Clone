import React from "react";
import classes from "./Menu.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profilImage from "../../../assests/images/profilimage.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Menu = () => {
  const addAnimaton = () => {};

  return (
    <div className={classes.menu}>
      <div>
        <SearchRoundedIcon sx={{ fontSize: 30, color: "white" }} />
      </div>
      <div className={classes.kids}>Kids</div>
      <div>
        <NotificationsIcon sx={{ fontSize: 30 }} />
      </div>
      <div className={classes.profil}>
        <img
          src={profilImage}
          alt=""
          onClick={addAnimaton}
          className={classes["flip-scale-up-hor"]}
        />
        <ArrowDropDownIcon className={classes["profile-icon"]} />
        <div className={classes.dropdown}>gggggggg</div>
      </div>
    </div>
  );
};

export default Menu;
