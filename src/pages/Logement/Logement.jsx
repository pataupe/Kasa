import Slideshow from "../../components/Slideshow/Slideshow"
import './Logement.scss'
import { useParams,Navigate } from "react-router-dom"
import logements from "../../logements.json"
import Collapse from "../../components/Collapse/Collapse"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Logement() {
  const { id } = useParams()
  const logement = logements.find(logement => logement.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className={i <= rating ? 'logement__star--active' : 'logement__star'}
      />
      )
    }
    return stars
  }
  return (
    <article className="logement">
      <div className="logement__carousel">
        <Slideshow pictures={logement.pictures} />
      </div>
      <div className="logement__info">
        <div className="logement__info__adresse">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}

          </div>
        </div>
        <div className="logement__info__proprietaire">
          <div className="logement__info__proprietaire__nom">
            <span> {logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement__info__proprietaire__rating">
            {renderStars(parseInt(logement.rating))}
          </div>
        </div>
      </div>
      <div className="logement__collapse">
        <Collapse
          title="Description"
          content={logement.description}
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </article>
  )
}

export default Logement