import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import { useOutletContext } from "react-router-dom";

export default function MovieList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWE0ZjUwNDM1ZGNjNDY2ZjNjNzA5ZjcyNWE2NWM1NyIsIm5iZiI6MTc4NTQ5NTk3My4zMTgsInN1YiI6IjZhNmM4MWE1ZTNiYWVlMDI2NDFmZmEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iIQfwzyRNixdDFKuCeQktg9tBbUriURKvrsqdm83xqs",
        accept: "application/json",
      },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setData(data.results);
      });
    });
  }, []);
  const queries = useOutletContext();
  return (
    <>
      {data
        .filter((data) => {
          return data.original_title.toLowerCase().includes(queries);
        })
        .map((movie) => {
          return (
            <MovieCard
              movies={movie}
              key={movie.id}
              id={movie.id}
              backdrop_path={movie.backdrop_path}
              release_date={movie.release_date}
              original_title={movie.original_title}
            />
          );
        })}
    </>
  );
}
