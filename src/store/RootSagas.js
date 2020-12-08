import { fork, all } from "redux-saga/effects";
// Sagas
import CotizacionesSaga from "../views/CotizacionesList/sagas";
import CotizacionesDetailsSaga from "../views/CotizacionDetail/sagas/indes";

function* RootSaga() {
  yield all([fork(CotizacionesSaga), fork(CotizacionesDetailsSaga)]);
}

export default RootSaga;
