import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Index from "../pages/Characters/Index";
import Show from "../pages/Characters/Show";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard children={<Outlet />} />,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "show/:id",
        element: <Show />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
