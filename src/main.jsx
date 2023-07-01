import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import AuthProviders from "./providers/AuthProviders";
import Register from "./pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Login />,
      },
      {
        path: "/allToys",
        element: <Login />,
      },
      {
        path: "/myToys",
        element: <Login />,
      },
      {
        path: "/addAToy",
        element: <Login />,
      },
      {
        path: "/toyDetails",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
