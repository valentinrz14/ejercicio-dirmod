import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Styles
import "./index.scss";
// Components
import { PageNotFound, LoadingSpinner } from "../../components/";
// Actions
import { cotizacionesDetailsLoading } from "./actions/";

const CotizacionDetail = ({ match }) => {
  // Obtengo el nombre desde la url
  const { nombre } = match.params;
  const dispatch = useDispatch();
  const fetchCotizacionesDetails = () =>
    dispatch(cotizacionesDetailsLoading(nombre));

  const { data, loading } = useSelector((state) => state.cotizacionesDetails);

  useEffect(() => {
    fetchCotizacionesDetails();
  }, []);

  const renderDetailList = () => {
    const { nombre, moneda, precio, fecha } = data;
    return (
      <div className="ec-cotizacion-detail-container">
        <div className="ec-cotizacion-detail-container__nombre">
          Nombre
          <p>{nombre}</p>
        </div>
        <div className="ec-cotizacion-detail-container__moneda">
          Moneda
          <p>{moneda}</p>
        </div>
        <div className="ec-cotizacion-detail-container__precio">
          Precio
          <p>{precio}</p>
        </div>
        <div className="ec-cotizacion-detail-container__fecha">
          Fecha
          <p>{fecha}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="ec-cotizacion-detail">
      {loading ? (
        <LoadingSpinner />
      ) : data !== undefined ? (
        renderDetailList()
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default CotizacionDetail;
