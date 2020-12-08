import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ component, ...options }) => {
  if (!false) return <Route {...options} component={component} />;
  return <Redirect to="/" />;
};
