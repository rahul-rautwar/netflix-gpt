import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="-mt-50 relative z-20">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcomings"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
