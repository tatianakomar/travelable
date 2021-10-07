import './Card.css';
import cards from '../../config/cards';

function Card() {

  return (
      cards.map(card => {
          return (
          <li className="card" key={card.image}>
            <img className="card__image" src={card.image} alt={card.title}></img>
            <p className="card__title">{card.title}</p>
          </li>
          )
      })
    
  );
}

export default Card;