import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsData = data.teams
    const updatedTeamsData = teamsData.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: updatedTeamsData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div data-testid="loader">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#OBBFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container" data-testid="loader">
            <h1 className="main-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="logo-setting"
                alt="ipl logo"
              />
              IPL Dashboard
            </h1>
            <ul className="ul-container" data-testid="loader">
              {teamsList.map(eachItem => (
                <TeamCard eachTeam={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
