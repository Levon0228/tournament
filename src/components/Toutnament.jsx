/** @format */

import React from "react";
import GroupA from "./GroupA";
import GroupB from "./GroupB";
import "./Tournament.css";

const Tournament = ({
  eighthfinal,
  quarterfinals,
  semifinals,
  final,
  playTour,
  champion,
}) => {
  const [eighthfinalGroupATeams, eighthfinalGroupBTeams] = eighthfinal;
  const [quarterfinalsGroupATeams, quarterfinalsGroupBTeams] = quarterfinals;
  const [semifinalsGroupATeams, semifinalsGroupBTeams] = semifinals;
  const [groupAFinalTeam, groupBFinalTeam] = final;
  const leagueChampion = champion.length ? champion[0][0] : [];

  console.log(champion);
  return (
    <div className="bracket">
      <GroupA
        eighthfinalGroupATeams={eighthfinalGroupATeams}
        quarterfinalsGroupATeams={quarterfinalsGroupATeams}
        semifinalsGroupATeams={semifinalsGroupATeams}
        groupAFinalTeam={groupAFinalTeam}
      />
      <div className="centered">
        <div className="buyton-cont">
          <button onClick={() => playTour()} className="playBtn">
            Play
          </button>
        </div>
        <div className="round champion-cont">
          <div className="champion">
            <div className="winners">
              <div className="matchups">
                <div className="matchup">
                  <div className="participants">
                    <span>{leagueChampion.team_name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GroupB
        eighthfinalGroupBTeams={eighthfinalGroupBTeams}
        quarterfinalsGroupBTeams={quarterfinalsGroupBTeams}
        semifinalsGroupBTeams={semifinalsGroupBTeams}
        groupBFinalTeam={groupBFinalTeam}
      />
      <div />
    </div>
  );
};

export default Tournament;
