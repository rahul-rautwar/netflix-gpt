import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // custom hook to fetch now playing movies
  useNowPlayingMovies();

  return (
    <div>
      <Header />

      {/* add main container and secondry container here */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
