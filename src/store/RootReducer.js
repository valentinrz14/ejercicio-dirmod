import { combineReducers } from "redux";
// Reducers
import { CotizacionesReducer } from "../views/CotizacionesList/reducers/";
import { CotizacionesDetailsReducer } from "../views/CotizacionDetail/reducers";

const RootReducer = combineReducers({
  cotizaciones: CotizacionesReducer,
  cotizacionesDetails: CotizacionesDetailsReducer,
});

export default RootReducer;
