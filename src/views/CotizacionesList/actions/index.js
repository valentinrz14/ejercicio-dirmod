import { mac } from "../../../helpers/redux";
import {
  COTIZACIONES_LIST_LOADING,
  COTIZACIONES_LIST_ERROR,
  COTIZACIONES_LIST_SUCCESS,
  SET_SEARCH_COTIZACION,
} from "../../../constants/actions";

export const cotizacionesListLoading = mac(COTIZACIONES_LIST_LOADING);
export const cotizacionesListError = mac(COTIZACIONES_LIST_ERROR, "errorMessage");
export const cotizacionesListSuccess = mac(
  COTIZACIONES_LIST_SUCCESS,
  "payload",
  "data"
);
export const setSearchCotizacion = mac(
  SET_SEARCH_COTIZACION,
  "payload",
  "search"
);
