import './Card.scss';

function Card({image, title}) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3 className="card__title">{title}</h3>
        </div>
    );
}

export default Card;