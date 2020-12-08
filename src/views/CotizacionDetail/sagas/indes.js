import { put, takeLatest, select, call } from "redux-saga/effects";
import { getCotizaciones } from "../api";
// Actions
import {
  cotizacionesDetailsSuccess,
  cotizacionesDetailsError,
} from "../actions/";
// Constants Actions
import { COTIZACIONES_DETAILS_LOADING } from "../../../constants/actions";
// States del reducer
import { getCotizacionesSaved } from "./selector";

function* fetchCotizacionesDetails(action) {
  try {
    const cotizacion_nombre = action.cotizacion_nombre;
    const cotizaciones = yield select(getCotizacionesSaved);

    const findNombre = (value) =>
      value.find(({ nombre }) => nombre.toLowerCase() === cotizacion_nombre);
    // Si ingresamos directamente a la url, las cotizaciones no van a estar preCargadas, asi que llamamos de nuevo y las cargamos
    if (cotizaciones.length === 0) {
      const cotizacionesCall = yield call(getCotizaciones);
      const payload = findNombre(cotizacionesCall);
      return yield put(cotizacionesDetailsSuccess(payload));
    } else {
      const payload = findNombre(cotizaciones);
      return yield put(cotizacionesDetailsSuccess(payload));
    }
  } catch (e) {
    yield put(cotizacionesDetailsError(e));
  }
}

function* CotizacionesDetailsSaga() {
  yield takeLatest(COTIZACIONES_DETAILS_LOADING, fetchCotizacionesDetails);
}

export default CotizacionesDetailsSaga;
