import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MoviesDetailContianer from "./MoviesDetailContianer";

export default function MoviesDetails() {
  const [movie, setMovies] = useState({});
  let id = useLocation().search.split("=")[1];
  let movieData = useLocation().state;
  function updataData(state) {
    setMovies(data);
  }
  useEffect(() => {
    if (movieData) {
      console.log("sate exist");
      setMovies(movieData);
    } else {
      fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWE0ZjUwNDM1ZGNjNDY2ZjNjNzA5ZjcyNWE2NWM1NyIsIm5iZiI6MTc4NTQ5NTk3My4zMTgsInN1YiI6IjZhNmM4MWE1ZTNiYWVlMDI2NDFmZmEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iIQfwzyRNixdDFKuCeQktg9tBbUriURKvrsqdm83xqs",
          accept: "application/json",
        },
      }).then((res) => {
        res.json().then((data) => {
          setMovies(data);
        });
      });
    }
  }, []);

  return (
    <>
      {movie && (
        <MoviesDetailContianer
          id={movie.id}
          backdrop_path={movie.backdrop_path}
          release_date={movie.release_date}
          original_title={movie.original_title}
          overview={movie.overview}
          popularity={movie.popularity}
          adult={movie.adult}
        />
      )}
    </>
  );
}
