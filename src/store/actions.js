/** @format */
import { constants } from "./constants";
export const firstLoadAction = (todo) => ({
  type: constants.LOAD,
  payload: todo,
});
export const winnerAction = (todo) => ({
  type: constants.PLAY,
  payload: todo,
});
