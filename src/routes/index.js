import React from "react";
import { useRoutes } from "react-router-dom";

import HomePage from "../pages/HomePage";

export default function Routes() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
  ];

  return useRoutes(routes);
}
