import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachMatch

  return (
    <li>
      <li>
        <div className="match-card-container" data-testid="loader">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
            className="oppo-img-setting"
          />
          <p className="heading1">{competingTeam}</p>
          <p className="heading1">{result}</p>
          <p className="status-para">{matchStatus}</p>
        </div>
      </li>
    </li>
  )
}

export default MatchCard
