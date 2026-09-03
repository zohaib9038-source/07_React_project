import React from "react";
import "./movieDetails.css";
export default function MoviesDetailContianer({
  backdrop_path,
  id,
  release_date,
  original_title,
  overview,
  adult,
  popularity,
}) {
  function goBack() {
    history.back();
  }
  return (
    <>
      <button onClick={goBack} className="backbtn">
        Back
      </button>

      <div className=" movieDetails">
        <img
          src={"https://image.tmdb.org/t/p/original" + backdrop_path}
          alt=""
        />

        <div className="moviesDescription">
          <h2 className="title">{original_title}</h2>
          <p>{overview}</p>
          <p>id:{id}</p>
          <p>Adult:{adult ? "true" : "false"}</p>
          <p>popularity:{popularity}</p>
          <p className="discription">{release_date}</p>
        </div>
      </div>
    </>
  );
}
