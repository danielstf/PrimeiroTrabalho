import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CouterContextProvider } from "./context/CounterContext";

//configurando rotas

import { RouterProvider, createBrowserRouter } from "react-router-dom";

//routes
import About from "./routes/About.jsx";
import Home from "./routes/Home.jsx";
import Products from "./routes/Products.jsx";

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
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CouterContextProvider router></CouterContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
