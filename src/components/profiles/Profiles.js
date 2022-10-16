import React from "react";
import classes from "./Profiles.module.css";
import Profil from "./Profil";

const Profiles = () => {
  return (
    <div className={classes.profiles}>
      <h1>Who's watching?</h1>
      <div className={classes["profiles-container"]}>
        <Profil />
        <Profil />
        <Profil />
        <Profil />
        <Profil />
      </div>
    </div>
  );
};

export default Profiles;
