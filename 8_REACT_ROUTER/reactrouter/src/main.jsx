import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1 configurando routes

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// prime react

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

// pages

import About from "./routes/About.jsx";
import Home from "./routes/Home.jsx";
import Info from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";

import Product from "./routes/Product.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/search",
        element: <Search />,
      },
      // 5 nested routes
      {
        path: "/products/:id/info",
        element: <Info />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      // redirect

      {
        path: "/company",
        element: <Navigate to="/about" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router}></RouterProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
