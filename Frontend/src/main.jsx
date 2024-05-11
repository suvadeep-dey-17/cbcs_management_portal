
import React,{useState} from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import CSV from "./components/CSV.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/dashboard",
        element: <App />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/csv",
        element: <CSV />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
