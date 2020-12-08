import {
  createReducer,
  fetchErrorReducer,
  fetchStartCustomReducer,
  fetchSuccessReducer,
} from "../../../helpers/redux";

import {
  COTIZACIONES_DETAILS_LOADING,
  COTIZACIONES_DETAILS_ERROR,
  COTIZACIONES_DETAILS_SUCCESS,
} from "../../../constants/actions";

// State con el que el reducer inicia
const initialState = {
  data: [],
  loading: false,
  errorMessage: undefined,
};

export const CotizacionesDetailsReducer = createReducer(initialState, {
  [COTIZACIONES_DETAILS_LOADING]: (state, action) =>
    fetchStartCustomReducer(state, action, "cotizacion_nombre"),
  [COTIZACIONES_DETAILS_ERROR]: fetchErrorReducer,
  [COTIZACIONES_DETAILS_SUCCESS]: (state, action) =>
    fetchSuccessReducer(state, action, "data"),
});
