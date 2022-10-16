import React from "react";
import classes from "./Profil.module.css";
import homeProfilImage from "../../assests/images/profilImage-Home.png";

const Profil = () => {
  return (
    <div className={classes.profil}>
      <img src={homeProfilImage} alt="" />
    </div>
  );
};

export default Profil;
