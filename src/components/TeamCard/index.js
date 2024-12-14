import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="li-container">
        <li>
          <div className="team-container" data-testid="loader">
            <img src={teamImageUrl} alt={name} className="team-img-cls" />
            <p>{name}</p>
          </div>
        </li>
      </li>
    </Link>
  )
}

export default TeamCard
