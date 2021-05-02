/** @format */

import Pair from "./GroupAPair";
import Final from "./Final";

const GroupA = ({
  eighthfinalGroupATeams,
  quarterfinalsGroupATeams,
  semifinalsGroupATeams,
  groupAFinalTeam,
}) => {
  return (
    <div className="groupA">
      <section className="round eighthfinal">
        {eighthfinalGroupATeams.map((pair, idx) => (
          <Pair key={idx} pair={pair} />
        ))}
      </section>

      <section className="round quarterfinals">
        {quarterfinalsGroupATeams.map((pair, idx) => (
          <Pair key={idx} pair={pair} />
        ))}
      </section>

      <section className="round semifinals">
        {semifinalsGroupATeams.map((pair, idx) => (
          <Pair key={idx} pair={pair} />
        ))}
      </section>
      <section className="round finals">
        <Final groupAFinalTeam={groupAFinalTeam} />
      </section>
    </div>
  );
};

export default GroupA;
