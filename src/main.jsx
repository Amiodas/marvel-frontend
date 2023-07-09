import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import AuthProviders from "./providers/AuthProviders";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import AllToys from "./pages/AllToys/AllToys";
import MyToys from "./pages/MyToys/MyToys";
import AddAToy from "./pages/AddAToy/AddAToy";
import ErrorPageLayout from "./layouts/ErrorPageLayout/ErrorPageLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Blog from "./pages/Blog/Blog";

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
        element: <Profile />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/myToys",
        element: <MyToys />,
      },
      {
        path: "/addAToy",
        element: <AddAToy />,
      },
      {
        path: "/toyDetails",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPageLayout />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
