/** @format */

import { pairCreator } from "./pairCreator";
export const randomWinnerCreator = (winners) => {
  const [groupAWinners, groupBWinners] = Object.values(winners);

  const groupARandomWinners = groupAWinners.map((el) =>
    Math.round(Math.random()) ? el[0] : el[1]
  );

  const groupAWinnerPair = pairCreator(groupARandomWinners);
  const groupBRandomWinners = groupBWinners.map((el) =>
    Math.round(Math.random()) ? el[0] : el[1]
  );

  const groupBWinnerPair = pairCreator(groupBRandomWinners);
  const winningTeams = [groupAWinnerPair, groupBWinnerPair];
  return winningTeams;
};
