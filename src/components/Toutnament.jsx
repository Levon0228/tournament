/** @format */

import React from "react";
import GroupA from "./GroupA";
import GroupB from "./GroupB";
import "./Tournament.css";

const Tournament = ({ eighthfinal, quarterfinals, semifinals }) => {
  const [groupA, groupB] = eighthfinal;
  const playTour = () => {};
  return (
    <>
      <div className="bracket">
        <GroupA
          groupA={groupA}
          quarterfinals={quarterfinals}
          semifinals={semifinals}
        />
        <div className="buyton-cont">
          <button onClick={() => playTour()} className="playBtn">
            Play
          </button>
        </div>
        <GroupB
          groupB={groupB}
          quarterfinals={quarterfinals}
          semifinals={semifinals}
        />
      </div>
    </>
  );
};

export default Tournament;
