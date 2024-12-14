// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  console.log(latestMatch.umpires)
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch
  return (
    <div className="lastest-match-card" data-testid="loader">
      <div className="status-left-container">
        <p className="heading1">{competingTeam}</p>
        <p className="heading1">{date}</p>
        <p className="heading1">{venue}</p>
        <p className="heading1">{result}</p>
      </div>

      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-img-cls"
      />

      <div className="status-right-container" data-testid="loader">
        <p className="heading1">First Innings</p>
        <p className="heading1">{firstInnings}</p>
        <p className="heading1">Second Innings</p>
        <p className="heading1">{secondInnings}</p>
        <p className="heading1">Man Of The Match</p>
        <p className="heading1">{manOfTheMatch}</p>
        <p className="heading1">Umpires</p>
        <p className="heading1">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
