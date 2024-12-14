import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LastestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamInfo: {}, isLoading: true, teamImg: ''}

  componentDidMount() {
    this.getTeamInfo()
  }

  getTeamInfo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    console.log(data.latest_match_details.umpires)
    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const recentMatches = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      teamInfo: {latestMatchDetails, recentMatches},
      teamImg: teamBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {teamInfo, teamImg, isLoading} = this.state
    const {latestMatchDetails, recentMatches} = teamInfo
    return (
      <div data-testid="loader">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#OBBFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-cls" data-testid="loader">
            <img src={teamImg} alt="team banner" className="teams-img-cls" />
            <h1 className="heading1">Lastest Matches</h1>
            <div className="components-container" data-testid="loader">
              <LastestMatch
                latestMatch={latestMatchDetails}
                key={latestMatchDetails.id}
              />
              <ul className="match-ul-container" data-testid="loader">
                {recentMatches.map(eachItem => (
                  <MatchCard eachMatch={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
