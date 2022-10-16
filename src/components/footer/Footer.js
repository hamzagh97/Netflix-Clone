import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes["social-icons"]}>
          <span>
            <FacebookRoundedIcon
              style={{ color: "white" }}
              sx={{ fontSize: 25 }}
            />
          </span>
          <span>
            <InstagramIcon style={{ color: "white" }} sx={{ fontSize: 25 }} />
          </span>
          <span>
            <TwitterIcon style={{ color: "white" }} sx={{ fontSize: 25 }} />
          </span>
          <span>
            <YouTubeIcon style={{ color: "white" }} sx={{ fontSize: 25 }} />
          </span>
        </div>
        <ul className={classes.links}>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>

        <div className={classes["footer-service"]}>
          <button className={classes.service}>Service Code</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
