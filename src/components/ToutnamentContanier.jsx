/** @format */
import React, { useState, useEffect } from "react";
import Tournament from "./Toutnament";
import { useDispatch, useSelector } from "react-redux";
import { firstLoadAction } from "../store/actions";
import axios from "axios";

// const TournamentContanier = () => {
//   const [groups, setGroups] = useState([]);
//   const [randomPair, setRandomPair] = useState([]);
//   // useEffect(() => {
//   //   (async () => {
//   //     const result = await axios("response.json");
//   //     // const randomTeams = result.data.data.sort(() => Math.random() - 0.5);
//   //     // const pair = randomTeams.reduce(
//   //     //   (acc, e, i) => (
//   //     //     i % 2 ? acc[acc.length - 1].push(e) : acc.push([e]), acc
//   //     //   ),
//   //     //   []
//   //     // );
//   //     // const length = pair.length;
//   //     // const randomGroups = [
//   //     //   pair.slice(0, length / 2),
//   //     //   pair.slice(length / 2, length),
//   //     // ];
//   //     setGroups(randomGroups);
//   //   })();
//   // }, []);

//   const playTour = (group) => {
//     const randomTeams = group.map((el) =>
//       Math.round(Math.random()) ? el[0] : el[1]
//     );
//     const pair = randomTeams.reduce(
//       (acc, e, i) => (i % 2 ? acc[acc.length - 1].push(e) : acc.push([e]), acc),
//       []
//     );
//     setRandomPair(pair);
//   };

//   return (
//     <Tournament groups={groups} playTour={playTour} randomPair={randomPair} />
//   );
// };

// export default TournamentContanier;

const TournamentContanier = () => {
  const eighthfinal = useSelector((state) => state.playTourReducer);
  const quarterfinals = useSelector((state) => state.quarterfinalsReducer);
  const semifinals = useSelector((state) => state.semifinalsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const result = await axios("response.json");
      dispatch(firstLoadAction(result.data.data));
    })();
  }, [dispatch]);

  return (
    <Tournament
      eighthfinal={eighthfinal}
      quarterfinals={quarterfinals}
      semifinals={semifinals}
    />
  );
};

export default TournamentContanier;
