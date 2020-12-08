import { mac } from "../../../helpers/redux";
import {
  COTIZACIONES_DETAILS_LOADING,
  COTIZACIONES_DETAILS_ERROR,
  COTIZACIONES_DETAILS_SUCCESS,
} from "../../../constants/actions";

export const cotizacionesDetailsLoading = mac(
  COTIZACIONES_DETAILS_LOADING,
  "cotizacion_nombre"
);
export const cotizacionesDetailsError = mac(
  COTIZACIONES_DETAILS_ERROR,
  "errorMessage"
);
export const cotizacionesDetailsSuccess = mac(
  COTIZACIONES_DETAILS_SUCCESS,
  "payload",
  "data"
);
