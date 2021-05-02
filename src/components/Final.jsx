/** @format */

const Final = ({ groupAFinalTeam, groupBFinalTeam }) => {
  const fin = groupAFinalTeam || groupBFinalTeam;
  const team = !fin[0] || !Object.keys(fin[0]).length ? [] : fin[0][0];
  return (
    <div className="winners">
      <div className="matchups">
        <div className="matchup">
          <div className="participants">
            <span>{team.team_name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
