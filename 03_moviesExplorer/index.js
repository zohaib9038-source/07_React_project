import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MoviesDetails from "./components/MoviesDetails";
let root = createRoot(document.querySelector("#root"));
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie",
        element: <MoviesDetails />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
