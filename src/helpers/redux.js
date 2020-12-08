// Actions
const mac = (type, ...argNames) => (...args) => {
  const action = { type };
  let action2 = {};

  if (type.indexOf("_SUCCESS") !== -1 || type.indexOf("SET_") !== -1) {
    action2[argNames[1]] = args[0];
    action[argNames[0]] = action2;
  } else if (type.indexOf("_DETAILS") !== -1) {
    action[argNames[0]] = args[0];
  } else {
    argNames.map((value, index) => (action[argNames[index]] = args[index]));
  }
  return action;
};

// CreateReducers
const createReducer = (InitialState, handlers) => (
  state = InitialState,
  action,
  name
) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action, name);
  } else {
    return state;
  }
};
// Reducers
const fetchStartCustomReducer = (state, action, name) => ({
  ...state,
  loading: true,
  [name]: action[name],
});

const fetchStartReducer = (state) => ({
  ...state,
  loading: true,
});

const fetchErrorReducer = (state, action) => ({
  ...state,
  loading: false,
  errorMessage: action.errorMessage,
});

const fetchSuccessReducer = (state, action, name) => ({
  ...state,
  [name]: action.payload[name],
  loading: false,
  errorMessage: undefined,
});

const setFetchStartReducer = (state, action, name) => ({
  ...state,
  [name]: action.payload[name],
});

const setsFetchStartReducer = (state, action, name, item) => ({
  ...state,
  [name]: action.payload[name],
  [item]: action.payload[item],
});

export {
  mac,
  createReducer,
  fetchStartCustomReducer,
  fetchStartReducer,
  fetchSuccessReducer,
  fetchErrorReducer,
  setFetchStartReducer,
  setsFetchStartReducer,
};
