import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/root_reducer";
import thunk from "redux-thunk";

/** Enhancer */

/*
const stringEnhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);

    let originalDispatch = store.dispatch;

    store.dispatch = (action) => {
      if (typeof action === "string") {
        return originalDispatch({ type: action });
      }

      return originalDispatch(action);
    };

    return store;
  };

const logEnhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);

    let originalDispatch = store.dispatch;

    store.dispatch = (action) => {
      console.log(
        action.type,
        action.payload !== undefined ? action.payload : ""
      );

      return originalDispatch(action);
    };

    return store;
  };

const store = createStore(reducer, compose(stringEnhancer, logEnhancer));
*/

let stringMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "string") {
    return dispatch({
      type: action,
    });
  }

  return dispatch(action);
};

let logMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    console.log(action, getState());
    return next(action);
  };

let middlewares = applyMiddleware(thunk, stringMiddleware, logMiddleware);

let delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAYED_ACTION",
      }),
    timeout
  );
};

const store = createStore(reducer, middlewares);

store.dispatch(delayedActionCreator(2000));

export { store };
