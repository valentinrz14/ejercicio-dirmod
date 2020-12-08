import { call, put, takeLatest } from "redux-saga/effects";
// Fetch Users
import { getCotizaciones } from "../api";
// Constanst Actions
import { COTIZACIONES_LIST_LOADING } from "../../../constants/actions";
// Actions
import { cotizacionesListSuccess, cotizacionesListError } from "../actions";

function* fetchCotizaciones(action) {
  try {
    // Obtiene los datos del servicio
    const data = yield call(getCotizaciones);
    // Inyecta los datos al action
    yield put(cotizacionesListSuccess(data));
  } catch (e) {
    yield put(cotizacionesListError(e));
  }
}

function* CotizacionesSaga() {
  yield takeLatest(COTIZACIONES_LIST_LOADING, fetchCotizaciones);
}

export default CotizacionesSaga;
