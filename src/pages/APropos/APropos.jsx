import Banner from "../../components/Banner/Banner"
import banner from "../../assets/images/aboutbanner.png"
import Collapse from "../../components/Collapse/Collapse"
import "./APropos.scss"

function APropos() {
  return (
    <div className="collapse-container">
      <Banner 
      image={banner}
      />
      <Collapse 
      title="Fiabilité"
      content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et notre équipe se déplace sur place pour valider chaque lieu."
      />
      <Collapse 
      title="Respect"
      content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou préjudiciable à un tiers est strictement interdit."
      />
      <Collapse 
      title="Service"
      content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <Collapse 
      title="Sécurité"
      content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  )
}

export default APropos