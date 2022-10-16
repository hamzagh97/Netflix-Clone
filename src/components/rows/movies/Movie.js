import React, { useState } from "react";
import classes from "./Movie.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleFavourite } from "../../../store/movies-slice";
import MovieExpanded from "./movieExpanded/MovieExpanded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Movie = (props) => {
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setModalState(true);
  };

  const addToFavourite = () => {
    dispatch(
      toggleFavourite({
        id: props.id,
        image: props.image,
        match: props.match,
      })
    );
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <>
      <div className={classes.movie}>
        <img alt="movie" src={props.image} />
        <div className={classes["movie-info"]}>
          <div className={classes.controls}>
            <span>
              <PlayArrowRoundedIcon
                style={{ color: "black" }}
                className={classes.iconSize}
              />
            </span>
            <span>
              <AddIcon className={classes.iconSize} />
            </span>
            <span>
              <ThumbUpAltOutlinedIcon
                className={classes.iconSize}
                onClick={addToFavourite}
                style={{ fill: props.isFavourite && "red" }}
              />
            </span>
            <span>
              <ExpandMoreIcon
                style={{ borderColor: "black" }}
                className={classes.iconExpand}
                onClick={showModal}
              />
            </span>
          </div>
          <div className={classes["info"]}>
            <div className={classes["general-info"]}>
              <span className={classes["match-score"]}>{props.match}</span>
              <span className={classes["maturity-rating"]}>
                <span className={classes["maturity-number"]}>18+</span>
                <span className={classes.duration}>5 Seasons</span>
                <span className={classes["player-feature-badge"]}>HD</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {modalState && <MovieExpanded closeModal={closeModal} id={props.id} />}
    </>
  );
};

export default Movie;
