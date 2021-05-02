/** @format */
import { constants } from "./constants";
export const firstLoadAction = (teams) => ({
  type: constants.LOAD,
  payload: teams,
});

export const eighthfinalWinnerAction = (teams) => ({
  type: constants.EIGHTHFINALSWINNERS,
  payload: teams,
});
export const quarterfinalsWinnerAction = (teams) => ({
  type: constants.QUARTERFINALSWINNERS,
  payload: teams,
});
export const semifinalsWinnerAction = (teams) => ({
  type: constants.SEMIFNALSWINNERS,
  payload: teams,
});
export const finalwinnerAction = (teams) => ({
  type: constants.FINALWINNERS,
  payload: teams,
});
