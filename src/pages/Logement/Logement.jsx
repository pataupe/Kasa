import Slideshow from "../../components/Slideshow/Slideshow"
import './Logement.scss'
import { useParams } from "react-router-dom"
import logements from "../../logements.json"
import Error404 from "../Error404/Error404"

function Logement() {
  const { id } = useParams()
  const logement = logements.find(logement => logement.id === id)

  if (!logement) {
    return <Error404 />
  }

  return <Slideshow pictures={logement.pictures} />
}

export default Logement