import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__column">
          <img className="footer_logo" src="images/footer_logo.svg" alt="Travel Able text logo"></img>
          <p className="footer__copyright">&copy; 2021 travelable</p>
        </div>
        <div className="footer__input">
          <div className="footer__input_email">
            <input type="email" id="email" name="email" placeholder="email"></input>
            <button className="button">Subscribe</button>
          </div>
          <p className="footer__input_text">Subscribe to be the first to hear about updates</p>
          <ul className="footer__menu">
            <li className="footer__terms">
              <a className="footer__link" href="#footer">terms of service</a></li>
            <li className="footer__privacy">
              <a className="footer__link" href="#footer">privacy policy</a></li>
            <li className="footer__covid">
              <a className="footer__link" href="#footer">Covid-19</a></li>
            <li className="footer__contact">
              <a className="footer__link" href="#footer">contact us</a></li>
          </ul>
        </div>
        <div className="footer__apps">

          <a href="https://www.apple.com/app-store/" className="footer__column_link" target="_blank">
            <img className="footer__app_icons" src="images/app_store.svg"
              alt="Apple App Store icon, white outline of an apple"></img>
          </a>
          <a href="https://play.google.com/store" className="footer__column_link" target="_blank">
            <img className="footer__app_icons" src="images/google_play.svg"
              alt="Google Play background"></img>
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
