import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Bulbassaur from "./routes/Bulbasssaur/Bulbassaur.jsx";

import Pikachu from "./routes/Pikachu/Pikachu.jsx";
import Totodile from "./routes/Totodile/Totodile.jsx";

// 1 - configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

// 1.1 - aqui estou setando as rotas, para configurar, precisa ter páginas

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // página básica de erro
    children: [
      {
        path: "/",
        element: <Pikachu />,
      },
      {
        path: "/bulbassaur",
        element: <Bulbassaur />,
      },
      {
        path: "/totodile",
        element: <Totodile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
