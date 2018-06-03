import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

import { initialState as amiibos } from "../reducers/amiibos";

const initialState = {
  amiibos,
};

const getStore = () =>
  createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));

export default getStore;
