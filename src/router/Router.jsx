import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../containers/Main/Main";
import Bulbassaur from "../routes/Bulbasssaur/Bulbassaur";
import Pikachu from "../routes/Pikachu/Pikachu";
import Totodile from "../routes/Totodile/Totodile";

// 1 - configurando o router

// 1.1 - aqui estou setando as rotas, para configurar, precisa ter página
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
