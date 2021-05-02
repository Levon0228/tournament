/** @format */
import { constants, rounds } from "./constants";
import { initialData } from "./initialData";
import { pairCreator } from "./pairCreator";
import { randomWinnerCreator } from "./randomWinnerCreator";

export const playTourReducer = (state = initialData, action) => {
  switch (action.type) {
    case constants.LOAD:
      const loadedState = [...action.payload];
      const randomTeams = loadedState.sort(() => Math.random() - 0.5);
      const pair = pairCreator(randomTeams);

      const length = pair.length;
      const randomGroups = [
        pair.slice(0, length / 2),
        pair.slice(length / 2, length),
      ];

      const data = { ...state };
      data.eighthfinal = [...randomGroups];
      data.eighthfinal.status = true;
      return data;

    case constants.EIGHTHFINALSWINNERS:
      const tour = { ...action.payload };
      let winners, nextRoundName;
      winners = { ...tour.eighthfinal };
      nextRoundName = rounds.Quarterfinals;
      const winningTeams = randomWinnerCreator(winners);
      tour[nextRoundName] = [...winningTeams];
      tour[nextRoundName].status = true;
      return tour;
    case constants.QUARTERFINALSWINNERS:
      const quarterTour = { ...action.payload };
      const quarterWinners = { ...quarterTour.quarterfinals };
      const quarterWinningTeams = randomWinnerCreator(quarterWinners);
      quarterTour[rounds.Semifinals] = [...quarterWinningTeams];
      quarterTour[rounds.Semifinals].status = true;
      return quarterTour;
    case constants.SEMIFNALSWINNERS:
      const semiTour = { ...action.payload };
      const semiWinners = { ...semiTour.semifinals };
      const semiWinningTeams = randomWinnerCreator(semiWinners);
      semiTour[rounds.Final] = [...semiWinningTeams];
      semiTour[rounds.Final].status = true;
      return semiTour;
    case constants.FINALWINNERS:
      const finalTour = { ...action.payload };
      const finalists = finalTour.final;
      const champion = Math.round(Math.random()) ? finalists[1] : finalists[0];
      finalTour.champion = [...champion];
      finalTour.isComplate = true;
      return finalTour;

    default:
      const stateLen = state.length;
      const tmpEighthfinal = [
        state.slice(0, stateLen / 2),
        state.slice(stateLen / 2, stateLen),
      ];
      const tmpQuarterfinals = [
        state.slice(0, tmpEighthfinal[0].length / 2),
        state.slice(tmpEighthfinal[0].length / 2, tmpEighthfinal[0].length),
      ];
      const tmpSemifinals = [
        state.slice(0, tmpQuarterfinals[0].length / 2),
        state.slice(tmpQuarterfinals[0].length / 2, tmpQuarterfinals[0].length),
      ];
      const tmpFinal = tmpSemifinals;
      const tmpTour = {};
      tmpTour.eighthfinal = [...tmpEighthfinal];
      tmpTour.eighthfinal.status = false;
      tmpTour.quarterfinals = [...tmpQuarterfinals];
      tmpTour.quarterfinals.status = false;
      tmpTour.semifinals = [...tmpSemifinals];
      tmpTour.semifinals.status = false;
      tmpTour.final = [...tmpFinal];
      tmpTour.final.status = false;
      tmpTour.champion = [];
      tmpTour.isComplate = false;
      state = tmpTour;
      return state;
  }
};
