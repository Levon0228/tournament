/** @format */
import React, { useEffect } from "react";
import Tournament from "./Toutnament";
import { useDispatch, useSelector } from "react-redux";
import {
  firstLoadAction,
  eighthfinalWinnerAction,
  quarterfinalsWinnerAction,
  semifinalsWinnerAction,
  finalwinnerAction,
} from "../store/actions";
import axios from "axios";

const TournamentContanier = () => {
  const allTeams = useSelector((state) => state.playTourReducer);

  const eighthfinal = allTeams.eighthfinal;
  const quarterfinals = allTeams.quarterfinals;
  const semifinals = allTeams.semifinals;
  const final = allTeams.final;
  const champion = allTeams.champion;
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const result = await axios("response.json");
      dispatch(firstLoadAction(result.data.data));
    })();
  }, [dispatch]);

  const playTour = () => {
    if (allTeams.isComplate) return;
    if (final.status) {
      dispatch(finalwinnerAction(allTeams));
    } else if (semifinals.status) {
      dispatch(semifinalsWinnerAction(allTeams));
    } else if (quarterfinals.status) {
      dispatch(quarterfinalsWinnerAction(allTeams));
    } else if (eighthfinal.status) {
      dispatch(eighthfinalWinnerAction(allTeams));
    }
  };

  return (
    <div>
      <Tournament
        eighthfinal={eighthfinal}
        quarterfinals={quarterfinals}
        semifinals={semifinals}
        final={final}
        champion={champion}
        playTour={playTour}
      />
    </div>
  );
};

export default TournamentContanier;
