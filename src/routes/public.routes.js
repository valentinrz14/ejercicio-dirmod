import React from "react";
import { Switch } from "react-router-dom";
import { PublicRoute } from "./HelperRoutes";
// Views
import CotizacionesList from "../views/CotizacionesList";
import CotizacionDetail from "../views/CotizacionDetail";
const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute path={"/"} exact component={CotizacionesList} />
      <PublicRoute path={"/:nombre"} exact component={CotizacionDetail} />
    </Switch>
  );
};

export default PublicRoutes;
