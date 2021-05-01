/** @format */
const GroupAPair = ({ pair }) => {
  pair = !!pair ? pair : [];
  return (
    <div className="winners">
      <div className="matchups">
        {pair.map((team) => (
          <div className="matchup">
            <div className="participants">{team.team_name}</div>
          </div>
        ))}
      </div>
      <div className="connector">
        <div className="merger"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default GroupAPair;
