/** @format */

import Pair from "./GroupAPair";

const GroupA = ({ groupA, quarterfinals, semifinals }) => {
  return (
    <div className="groupA">
      <section className="round eighthfinal">
        {groupA.map((pair) => (
          <Pair pair={pair} />
        ))}
      </section>

      <section className="round quarterfinals">
        {quarterfinals.map((pair) => (
          <Pair />
        ))}
      </section>

      <section className="round semifinals">
        {semifinals.map((pair) => (
          <Pair />
        ))}
      </section>
      <section className="round finals">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupA;
