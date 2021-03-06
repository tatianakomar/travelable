import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__overlay">
                <div className="carousel">
                    <div className="alaska"></div>
                    <div className="arizona"></div>
                    <div className="idaho"></div>
                    <div className="wyoming"></div>
                    <div className="hawaii"></div>
                    <div className="iowa"></div>
                </div>

                <section className="header__nav">
                    <img className="header_logo" src="images/header_logo.svg" alt="Travel Able text logo"></img>
                    <div className="header__nav_menu">
                        <img className="header_eye" src="./images/header_eye.svg" alt="logo of eye, which toggles site for the visually impaired"></img>
                        <img className="header_planet" src="images/header_planet.svg" alt="logo of eye, which toggles site in different languages"></img>
                    </div>
                    {/*links to adapted site for the visually impaired and different languages to be added in future*/}
                </section>

                <div className="header__text">
                    <p className="header__paragraph">We know how difficult it can be to plan a journey during the Covid-19 pandemic. So we created a service to make it easier for you.</p>
                    <p className="header__paragraph">Just choose some filters which are important for you and see which states you can visit according your filters.</p>
                </div>
                <p className="header__restrictions">There are <span className="restriction-number">0</span> states in the USA without any restrictions right now</p>
                {/*variable to be added in span class*/}
            </div>
        </header >
    )
}

export default Header;
