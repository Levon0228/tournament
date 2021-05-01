/** @format */

import { createStore, combineReducers } from "redux";
import {
  playTourReducer,
  quarterfinalsReducer,
  semifinalsReducer,
} from "./reducers";

const reducers = combineReducers({
  playTourReducer,
  quarterfinalsReducer,
  semifinalsReducer,
});

export const store = createStore(reducers);
