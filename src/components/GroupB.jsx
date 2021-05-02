/** @format */

import Pair from "./GroupBPair";
import Final from "./Final";

const GroupB = ({
  eighthfinalGroupBTeams,
  quarterfinalsGroupBTeams,
  semifinalsGroupBTeams,
  groupBFinalTeam,
}) => {
  return (
    <div className="groupB">
      <section className="round finals">
        <Final groupBFinalTeam={groupBFinalTeam} />
      </section>
      <section className="round semifinals">
        {semifinalsGroupBTeams.map((pair, idx) => (
          <Pair pair={pair} key={idx} />
        ))}
      </section>
      <section className="round quarterfinals">
        {quarterfinalsGroupBTeams.map((pair, idx) => (
          <Pair pair={pair} key={idx} />
        ))}
      </section>
      <section className="round eighthfinal">
        {eighthfinalGroupBTeams.map((pair, idx) => (
          <Pair pair={pair} key={idx} />
        ))}
      </section>
    </div>
  );
};

export default GroupB;
