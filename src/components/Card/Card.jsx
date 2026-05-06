import { Link } from "react-router-dom";
import './Card.scss';

function Card({image, title, id}) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={image} alt={title} />
            <h2 className="card__title">{title}</h2>
        </Link>
    );
}

export default Card;