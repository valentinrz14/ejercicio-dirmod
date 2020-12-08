import {
  createReducer,
  fetchErrorReducer,
  fetchStartReducer,
  fetchSuccessReducer,
  setFetchStartReducer,
} from "../../../helpers/redux";

import {
  COTIZACIONES_LIST_LOADING,
  COTIZACIONES_LIST_ERROR,
  COTIZACIONES_LIST_SUCCESS,
  SET_SEARCH_COTIZACION,
} from "../../../constants/actions";
// State con el que el reducer inicia 
const initialState = {
  data: [],
  loading: false,
  errorMessage: undefined,
  search: "",
};

export const CotizacionesReducer = createReducer(initialState, {
  [COTIZACIONES_LIST_LOADING]: fetchStartReducer,
  [COTIZACIONES_LIST_ERROR]: fetchErrorReducer,
  [COTIZACIONES_LIST_SUCCESS]: (state, action) =>
    fetchSuccessReducer(state, action, "data"),
  [SET_SEARCH_COTIZACION]: (state, action) =>
    setFetchStartReducer(state, action, "search"),
});
