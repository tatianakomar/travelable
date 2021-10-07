import './CardList.css';
import Card from '../Card/Card';
import airbnbLogo from '../../images/card-list_airbnb-logo.svg';
import bookingLogo from '../../images/card-list_booking-logo.svg';

function CardList () {
    return (
        <section className="card-list">
            <h2 className="card-list__title">According to the filters you selected, you can visit 
            <a className="card-list__link" href="https://www.california.com/" target="_blank" rel="noreferrer">&nbsp;California</a></h2>
            <p className="card-list__subtitle">California sights:</p>
            <ul className="card-list__list">
                <Card />
            </ul>
            <div>
                <h3 className="card-list__text">Would you like to see possible accommodation options for your trip?</h3>
                <ul className="card-list__offers">
                    <li className="card-list__offer">book with
                        <a className="card-list__offer-link" href="https://www.airbnb.com/" target="_blank" rel="noreferrer">
                            <img src={airbnbLogo} alt="airbnb logo"></img>
                        </a>
                    </li>
                    <li className="card-list__offer">book with
                        <a className="card-list__offer-link" href="https://www.booking.com/" target="_blank" rel="noreferrer">
                            <img src={bookingLogo} alt="booking logo"></img>
                        </a>
                    </li>
                </ul> 
            </div>
            
        </section>
    )
}

export default CardList;