import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/banner/Banner";
import Row from "../components/rows/Row";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const movies = useSelector((state) => state.movies.movies);

  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const imagePath = "https://image.tmdb.org/t/p/w500/";
  // const apiKey = "e23e4a5910a7b243c6dbf4ce8e03b707";

  // const fetchMoviesHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const datas = await response.json();

  //     const transformedMovies = datas.results.map((data) => {
  //       return {
  //         id: data.id,
  //         title: data.original_title,
  //         match: data.popularity,
  //         releaseDate: data.release_date,
  //         image: `${imagePath}${data.backdrop_path}`,
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  return (
    <>
      <Banner />
      <Row movies={movies} />
    </>
  );
};

export default Home;
