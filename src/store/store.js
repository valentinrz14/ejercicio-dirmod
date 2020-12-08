import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
// Roots Saga && Reducer
import RootReducer from "./RootReducer";
import RootSaga from "./RootSagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
// Run the Saga
sagaMiddleware.run(RootSaga);

export default Store;
