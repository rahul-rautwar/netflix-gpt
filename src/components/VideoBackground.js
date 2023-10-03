import React from "react";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

// fetch trailer videos and updating the store with trailer video data
const VideoBackground = ({ movieid }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieid);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/UQeTCD-VD2Y?si=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
