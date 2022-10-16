import React from "react";
import classes from "./MovieExpanded.module.css";
import trailerInfo2 from "../../../../assests/images/trailer-info2.png";
import bannerImage2 from "../../../../assests/images/banner2.jpg";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Modal from "../../../UI/modal/Modal";
import { useState, useEffect, useCallback } from "react";

const MovieExpanded = (props) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const imagePath = "https://image.tmdb.org/t/p/original/";
  const apiKey = "e23e4a5910a7b243c6dbf4ce8e03b707";

  const fetchSingleMovie = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=${apiKey}&language=en-US`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const datas = await response.json();
      // const movieData = datas.results.map((data) => {
      // return {
      //   id: data.id,
      //   title: data.original_title,
      //   match: data.popularity,
      //   releaseDate: data.release_date,
      //   image: `${imagePath}${data.backdrop_path}`,
      // };
      // });
      // setMovies(movieData);
      setMovie(datas);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [props.id]);

  useEffect(() => {
    fetchSingleMovie();
  }, [fetchSingleMovie]);

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.banner}>
        <img src={`${imagePath}${movie.backdrop_path}`} alt="banner" />
        <div className={classes.overlay}></div>
        <span>
          <ClearRoundedIcon
            style={{ color: "white" }}
            fontSize="medium"
            onClick={props.closeModal}
          />
        </span>
        <div className={classes.info}>
          <img src={trailerInfo2} alt="trailer-info" />

          <div className={classes.action}>
            <button className={classes.play}>
              <PlayArrowRoundedIcon
                style={{ color: "black", fontSize: 45 }}
                fontSize="large"
              />
              play
            </button>
            <button className={classes["more-info"]}>
              <ErrorOutlineSharpIcon
                style={{ color: "white", marginRight: 10, fontSize: 30 }}
                fontSize="large"
              />
              more info
            </button>
          </div>
        </div>
      </div>
      <div className={classes["movie-main-content"]}>
        <div className={classes["movie-info-content"]}>
          <div className={classes["movie-info"]}>
            <div className={classes["general-info"]}>
              <span className={classes["match-score"]}>97% Match</span>
              <span className={classes.year}>2013</span>
              <span className={classes["maturity-rating"]}>
                <span className={classes["maturity-number"]}>18+</span>
                <span className={classes.duration}>5 Seasons</span>
                <span className={classes["player-feature-badge"]}>HD</span>
              </span>
            </div>
            <div className={classes.discription}>
              <p>
                A high school chemistry teacher dying of cancer teams with a
                former student to secure his family's future by manufacturing
                and selling crystal meth.
              </p>
            </div>
          </div>
          <div className={classes["movie-info-right"]}>
            <div className={classes.cast}>
              <span className={classes.title}>cast</span>
            </div>
            <div className={classes.genres}>
              <span className={classes.title}>genres</span>
            </div>
            <div className={classes.tags}>
              <span className={classes.title}>this show is</span>
            </div>
          </div>
        </div>
        <section className={classes.episodes}>ffgdgdfg</section>
      </div>
    </Modal>
  );
};

export default MovieExpanded;
