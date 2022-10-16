import React, { useState, useEffect } from "react";
import Profiles from "./components/profiles/Profiles";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import MyListPage from "./pages/MyListPage";
import { fetchMovies } from "./store/movies-slice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); /**/
  const [isHome, setIsHome] = useState();
  // const content = `${isExpanded ? "expanded" : ""} `;

  // useEffect(() => {
  //   setIsHome(!isLoggedIn);
  // }, [isLoggedIn]);

  return (
    <Layout>
      {/* {isLoggedIn && <Profiles />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-list" element={<MyListPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
