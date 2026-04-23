import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import logements from "../../logements.json"
import './Home.scss'
import banner from "../../assets/images/banner.png"

function Home() {
  return (
    <>
      <Banner
        image={banner}
        text="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            image={logement.cover}
            title={logement.title}
            id={logement.id}
          />
        ))}
      </div>
    </>
  )
}

export default Home