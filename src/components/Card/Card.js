import './Card.css';

function Card({card}) {
        return (
          <li className="card">
            <img className="card__image" src={card.image} alt={card.title}></img>
            <p className="card__title">{card.title}</p>
          </li>
      )
  }

export default Card;