import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="ec-not-found-page-container">
      <p className="ec-not-found-page-container__title">404</p>
      <p className="ec-not-found-page-container__description">
        Es posible que la página que está buscando se haya eliminado,haya
        cambiado el nombre o no está disponible temporalmente.
      </p>
      <Link to="/" className="ec-not-found-page-container__btn">
        Inicio
      </Link>
    </div>
  );
};

export default PageNotFound;
