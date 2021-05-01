/** @format */

import Pair from "./GroupBPair";

const GroupB = ({ groupB, quarterfinals, semifinals }) => {
  return (
    <div className="groupB">
      <section className="round finals">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="round semifinals">
        {semifinals.map((pair) => (
          <Pair />
        ))}
      </section>
      <section className="round quarterfinals">
        {quarterfinals.map((pair) => (
          <Pair />
        ))}
      </section>
      <section className="round eighthfinal">
        {groupB.map((pair) => (
          <Pair />
        ))}
      </section>
    </div>
  );
};

export default GroupB;
