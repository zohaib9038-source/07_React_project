import React, { useState } from "react";

import "./movie.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { Outlet } from "react-router-dom";
export default function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="container">
      <Header queries={[query, setQuery]} />
      <Outlet context={query} />
    </div>
  );
}
