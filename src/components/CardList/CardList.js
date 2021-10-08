import './CardList.css';
import Card from '../Card/Card';
import cards from '../../config/cards';
import airbnbLogo from '../../images/card-list_airbnb-logo.svg';
import bookingLogo from '../../images/card-list_booking-logo.svg';


function CardList ({selectedStates}) {
    const selectedCards = cards.filter(card=>selectedStates.find(state=>state.id===card.id)?true:false);

    return (
        <section className="card-list">
            <h2 className="card-list__title">According to the filters you selected, you can visit</h2>
            {selectedCards.map((state)=>{
                return ( 
                <>
                    <a className="card-list__link" href={state.url} target="_blank" rel="noreferrer">&nbsp;{state.name}</a>
                    <p className="card-list__subtitle">{state.name} sights:</p>
                    <ul className="card-list__list">
                        {state.cards.map(card=>{
                        return <Card card={card}  />    
                        })}
                    </ul>
                </>)
            })}
            <div>
                <h3 className="card-list__text">Would you like to see possible accommodation options for your trip?</h3>
                <div className="card-list__offers">
                    <a className="card-list__offer-link" href="https://www.airbnb.com/" target="_blank" rel="noreferrer">
                        <button className="card-list__offer" type="button">Book with
                            <img src={airbnbLogo} alt="airbnb logo"></img>
                        </button>
                    </a>
                    <a className="card-list__offer-link" href="https://www.booking.com/" target="_blank" rel="noreferrer">
                        <button className="card-list__offer" type="button">Book with
                            <img src={bookingLogo} alt="booking logo"></img>
                        </button>
                    </a>
                </div> 
            </div>
            
        </section>
    )
}

export default CardList;