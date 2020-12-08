import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setSearchCotizacion } from "../views/CotizacionesList/actions";

const HeaderLayout = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.cotizaciones);
  const fetchSearchingCotizaciones = (e) => dispatch(setSearchCotizacion(e));

  return (
    <div className="ec-header">
      <input
        type="text"
        value={search}
        onChange={({ target }) => fetchSearchingCotizaciones(target.value)}
        placeholder="Buscar cotizaciones por nombre"
      />
      <div className="ec-header__content-icon">
        <FontAwesomeIcon icon={faSearch} size="lg" color="#fff" />
      </div>
    </div>
  );
};

export default HeaderLayout;
