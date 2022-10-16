import React from "react";
import { useSelector } from "react-redux";
import classes from "./MyListPage.module.css";
import Movie from "../components/rows/movies/Movie";

const MyListPage = () => {
  const favourite = useSelector((state) =>
    state.movies.movies.filter((movie) => movie.isFavourite)
  );

  return (
    <div className={classes.row}>
      <h3 className={classes.title}>Continue Watching for hamza</h3>
      <div className={classes.container}>
        <div className={classes.slider}>
          {favourite.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              image={movie.image}
              match={movie.match}
              isFavourite={movie.isFavourite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyListPage;
