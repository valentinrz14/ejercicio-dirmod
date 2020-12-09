import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { cotizacionesListLoading } from "./actions";
// Styles
import "./index.scss";
// Spiner
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";

const CotizacionesList = () => {
  // States Redux
  const { data, loading, search } = useSelector((state) => state.cotizaciones);
  // Dispatchs
  const dispatch = useDispatch();
  const fetchCotizaciones = () => dispatch(cotizacionesListLoading());

  useEffect(() => {
    fetchCotizaciones();
  }, []);

  useEffect(() => {
    // Cada 5 segundos vuelve a pedir el servicio para modificar los datos
    const timeout = setInterval(() => {
      fetchCotizaciones();
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  });

  // Searching and Filter by Moneda
  const searchingTerm = () => {
    return (x) =>
      x.nombre.trim().toLowerCase().includes(search.trim().toLowerCase()) || !search;
  };

  const renderList = () => {
    return data
      .filter(searchingTerm())
      .map(({ id, nombre, moneda, precio, fecha }) => (
        <Link
          to={`/${nombre.toLowerCase()}`}
          className="ec-table-list__button"
          key={id}
        >
          <div className="ec-table-list__content">
            <p className="ec-table-list__content-id">{id}</p>
            <p className="ec-table-list__content-nombre">{nombre}</p>
            <p className="ec-table-list__content-moneda">{moneda}</p>
            <p className="ec-table-list__content-precio">{precio}</p>
            <p className="ec-table-list__content-fecha">{fecha}</p>
          </div>
        </Link>
      ));
  };

  return (
    <div className="ec-user-container">
      <div className="ec-table-container">
        <p className="ec-table-title">LISTA DE LAS COTIZACIONES DE ARS</p>
        <div className="ec-table-content">
          <p className="ec-table-content__id">#</p>
          <p className="ec-table-content__nombre">Nombre</p>
          <p className="ec-table-content__moneda">Moneda</p>
          <p className="ec-table-content__precio">Precio</p>
          <p className="ec-table-content__fecha">Fecha</p>
        </div>
        <div className="ec-table-list">
          {data.length === 0 && loading ? <LoadingSpinner /> : renderList()}
        </div>
      </div>
    </div>
  );
};

export default CotizacionesList;
