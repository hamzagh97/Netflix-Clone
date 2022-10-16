import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./Row.module.css";
import Movie from "./movies/Movie";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Row = (props) => {
  console.log(props.movies);
  // let content = <p>Found no movies.</p>;

  // if (movies.length > 0) {
  //   content = <Row passMovies={movies} />;
  // }

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  // if (isLoading) {
  //   content = <p>Loading...</p>;
  // }

  // const rootStyle = getComputedStyle(window.root);
  // const sliderIndex =
  //   document.documentElement.style.getPropertyValue("--slider-index");

  // const scroll = (direction) => {
  //   direction === "left"
  //     ? document.documentElement.style.setProperty(
  //         "--slider-index",
  //         +rootStyle.getPropertyValue("--slider-index") -
  //           +rootStyle.getPropertyValue("--items-per-screen")
  //       )
  //     : document.documentElement.style.setProperty(
  //         "--slider-index",
  //         +rootStyle.getPropertyValue("--slider-index") +
  //           +rootStyle.getPropertyValue("--items-per-screen")
  //       );

  //   if (
  //     document.documentElement.style.getPropertyValue("--slider-index") <= 0
  //   ) {
  //     document.documentElement.style.setProperty("--slider-index", 0);
  //   }

  //   if (
  //     document.documentElement.style.getPropertyValue("--slider-index") > 19
  //   ) {
  //     document.documentElement.style.setProperty("--slider-index", 0);
  //   }
  // };
  const sliderRef = useRef();
  const [xPos, setXpos] = useState(0);
  const [sliderStyle, setStyle] = useState(`translateX(${xPos}%)`);
  const [isClicked, setIsclicked] = useState(false);
  const handleScroll = (direction) => {
    setIsclicked(true);
    direction === "left"
      ? setXpos((xPos) => xPos + 92)
      : setXpos((xPos) => xPos - 92);
  };

  useEffect(() => {
    setStyle(`translateX(${xPos}%)`);
  }, [xPos]);

  return (
    <div className={classes.row}>
      <h3 className={classes.title}>Continue Watching for hamza</h3>
      <div className={classes.container}>
        <button
          className={`${classes.handle} ${classes["left-handle"]}`}
          onClick={() => handleScroll("left")}
        >
          <div className={classes.text}>&#8249;</div>
        </button>
        <div
          className={classes.slider}
          style={{
            transform: isClicked ? `${sliderStyle}` : "",
          }}
          ref={sliderRef}
        >
          {props.movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              image={movie.image}
              match={movie.match}
              onShowModal={props.showModalHandler}
              isFavourite={movie.isFavourite}
            />
          ))}
        </div>
        <button
          className={`${classes.handle} ${classes["right-handle"]}`}
          // onClick={() => scroll("right")}
          onClick={() => handleScroll("right")}
        >
          <div className={classes.text}>&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export default Row;
