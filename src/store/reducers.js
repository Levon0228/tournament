/** @format */
import { constants } from "./constants";
import { initialData } from "./initialData";

export const playTourReducer = (state = initialData, action) => {
  switch (action.type) {
    case constants.LOAD:
      const loadedState = [...action.payload];

      const randomTeams = loadedState.sort(() => Math.random() - 0.5);
      const pair = randomTeams.reduce(
        (acc, e, i) => (
          i % 2 ? acc[acc.length - 1].push(e) : acc.push([e]), acc
        ),
        []
      );
      const length = pair.length;
      const randomGroups = [
        pair.slice(0, length / 2),
        pair.slice(length / 2, length),
      ];
      const a = [...state];
      console.log(state.length);
      state["eighthfinal"] = [...randomGroups];
      return randomGroups;

    case constants.PLAY:
      const winnersState = [...action.payload];
      return winnersState;

    default:
      const stateLen = state.length;
      const tmpEighthfinal = [
        state.slice(0, stateLen / 2),
        state.slice(stateLen / 2, stateLen),
      ];
      // const tmpQuarterfinals = [
      //   tmpEighthfinal[0].slice(0, tmpEighthfinal[0].length / 2),
      // ];
      // const tmpSemifinals = [
      //   tmpQuarterfinals[0].slice(0, tmpQuarterfinals[0].length / 2),
      // ];
      // var myArray = [];
      // myArray["eighthfinal"] = [...tmpEighthfinal];
      // myArray["quarterfinals"] = [...tmpQuarterfinals];
      // myArray["semifinals"] = [...tmpSemifinals];
      // state = myArray;
      return tmpEighthfinal;
  }
};
export const quarterfinalsReducer = (state = initialData, action) => {
  switch (action.type) {
    case constants.LOAD:
      const loadedState = [...state];

      // const randomTeams = loadedState.sort(() => Math.random() - 0.5);
      // const pair = randomTeams.reduce(
      //   (acc, e, i) => (
      //     i % 2 ? acc[acc.length - 1].push(e) : acc.push([e]), acc
      //   ),
      //   []
      // );
      // const length = pair.length;
      // const randomGroups = [
      //   pair.slice(0, length / 2),
      //   pair.slice(length / 2, length),
      // ];
      // const a = [...state];
      // console.log(state.length);
      // state["eighthfinal"] = [...randomGroups];
      return loadedState;

    case constants.PLAY:
      const winnersState = [...action.payload];
      return winnersState;

    default:
      const tmpQuarterfinals = [state.slice(0, state.length / 2)];

      return tmpQuarterfinals;
  }
};
export const semifinalsReducer = (state = initialData, action) => {
  switch (action.type) {
    case constants.LOAD:
      const loadedState = [...state];

      // const randomTeams = loadedState.sort(() => Math.random() - 0.5);
      // const pair = randomTeams.reduce(
      //   (acc, e, i) => (
      //     i % 2 ? acc[acc.length - 1].push(e) : acc.push([e]), acc
      //   ),
      //   []
      // );
      // const length = pair.length;
      // const randomGroups = [
      //   pair.slice(0, length / 2),
      //   pair.slice(length / 2, length),
      // ];
      // const a = [...state];
      // console.log(state.length);
      // state["eighthfinal"] = [...randomGroups];
      return loadedState;

    case constants.PLAY:
      const winnersState = [...action.payload];
      return winnersState;

    default:
      const tmpSemifinals = [state.slice(0, state.length / 2)];

      return tmpSemifinals;
  }
};
