import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//css
import "./index.css";

//context

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

import { ThemeProvider } from "./context/ThemeContext.jsx";

import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TitleColorContextProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </TitleColorContextProvider>
  </React.StrictMode>
);
