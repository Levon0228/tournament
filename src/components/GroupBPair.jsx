/** @format */
const GroupBPair = ({ pair }) => {
  const team1 = !pair || !Object.keys(pair).length ? [] : pair[0];
  const team2 = !pair || !Object.keys(pair).length ? [] : pair[1];
  return (
    <div className="winners">
      <div className="connector">
        <div className="line"></div>
        <div className="merger"></div>
      </div>
      <div className="matchups">
        <div className="matchup">
          <div className="participants">
            <span>{team1.team_name}</span>
          </div>
        </div>
        <div className="matchup">
          <div className="participants">
            <span>{team2.team_name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBPair;
