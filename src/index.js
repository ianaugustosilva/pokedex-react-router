import React from "react";
import ReactDOM from "react-dom/client";

// 1 - configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

import Bulbassaur from "./routes/Bulbassaur.jsx";
import Pikachu from "./routes/Pikachu.jsx";
import Totodile from "./routes/Totodile.jsx";

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
