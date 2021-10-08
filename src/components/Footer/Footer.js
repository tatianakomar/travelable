import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

          <ul className="footer__row">
            <li>
              <img className="footer_logo" src="images/footer_logo.svg" alt="Travel Able text logo"></img>
            </li>

            <div className="footer__input">
              <div className="footer__input_email">
              <input type="email" id="email" name="email" placeholder="email"></input>
              <a href=""
                className="button" target="_blank">Subscribe</a>
                </div>
                <p className="footer__input_text">Subscribe and you will be the first to know about changes</p>
            </div>


            <ul className="footer__apps">
              <li>
                <a href="" className="footer__column_link" target="_blank">
                  <img src="images/app_store.svg" className="footer__app_icons"
                    alt="Apple App Store icon, white outline of an apple"></img>
                </a>
              </li>
              <li>
                <a href="" className="footer__column_link" target="_blank">
                  <img src="images/google_play.svg" className="footer__app_icons"
                    alt="Google Play background"></img>
                </a>
              </li>
            </ul>
          </ul>


        <ul className="footer__menu">
          <li className="footer__copyright">&copy; 2021 travelable</li>
          <a href="" target="_blank">
            <li className="footer__terms">terms of service</li>
          </a>
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

    </footer>
  )
}

export default Footer;
