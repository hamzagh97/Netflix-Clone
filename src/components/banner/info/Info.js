import React from "react";
import classes from "./Info.module.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import { Button } from "@mui/material";

const Info = () => {
  return (
    <div className={classes.info}>
      <img
        src="https://occ-0-3996-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABV-vsNfwAPvuJc9arXrt73aIUH-mZJw3soOXG4BR-PFCPQHdLLf01TOFFUzAjg6qppQr50f9Be4vixXZMUVJlFBdJ0_a_yacnEkIEGLC9sk4.png?r=72b"
        alt="trailer-info"
      />
      <p>Watch Season 3 Now</p>
      <p>
        In 18th-century North America, ruthless trappers and entrepreneurs fight
        to wrest control of the fur trade from the mighty Hudson's Bay Company.
      </p>
      <div className={classes.action}>
        <Button className={classes.play} startIcon={<PlayArrowRoundedIcon />}>
          play
        </Button>
        <Button
          className={classes["more-info"]}
          startIcon={<ErrorOutlineSharpIcon />}
        >
          more info
        </Button>
      </div>
    </div>
  );
};

export default Info;
