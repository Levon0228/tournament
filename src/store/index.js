/** @format */

import { createStore, combineReducers } from "redux";
import { playTourReducer } from "./reducers";

const reducers = combineReducers({
  playTourReducer,
});

export const store = createStore(reducers);
