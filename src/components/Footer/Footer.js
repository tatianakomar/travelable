import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__row">

        <div className="footer__column">
          <img className="footer_logo" src="images/footer_logo.svg" alt="Travel Able text logo"></img>
          <p className="footer__copyright">&copy; 2021 travelable</p>
          <a href="" target="_blank"></a>
        </div>

        <div className="footer__input">
          <div className="footer__input_email">
            <input type="email" id="email" name="email" placeholder="email"></input>
            <a href=""
              className="button" target="_blank">Subscribe</a>
          </div>
          <p className="footer__input_text">Subscribe and you will be the first to know about changes</p>

          <ul className="footer__menu">

            <li className="footer__terms">terms of service</li>
            <a href="" target="_blank">
              <li className="footer__privacy">privacy policy</li>
            </a>
            <a href="" target="_blank">
              <li className="footer__covid">Covid-19</li>
            </a>
            <a href="" target="_blank">
              <li className="footer__contact">contact us</li>
            </a>
          </ul>
        </div>


        <div className="footer__apps">
          <a href="" className="footer__column_link" target="_blank">
            <img className="footer__app_icons" src="images/app_store.svg"
              alt="Apple App Store icon, white outline of an apple"></img>
          </a>
          <a href="" className="footer__column_link" target="_blank">
            <img className="footer__app_icons" src="images/google_play.svg"
              alt="Google Play background"></img>
          </a>
        </div>

      </div>




    </footer>
  )
}

export default Footer;
