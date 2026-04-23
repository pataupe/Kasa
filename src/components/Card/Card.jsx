import { Link } from "react-router-dom";
import './Card.scss';

function Card({image, title, id}) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={image} alt={title} />
            <h3 className="card__title">{title}</h3>
        </Link>
    );
}

export default Card;