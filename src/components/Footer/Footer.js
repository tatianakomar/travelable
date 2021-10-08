import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

          <ul className="footer__row">
            <li>
              <img className="footer_logo" src="images/footer_logo.svg" alt="Travel Able text logo"></img>
            </li>

            <li className="footer__input">
              <input type="email" id="email" name="email" placeholder="email"></input>
            </li>
            <li>
              <a href=""
                class="button" target="_blank">subscribe</a>
            </li>


            <ul className="footer__apps">
              <li>
                <a href="" class="footer__column_link" target="_blank">
                  <img src="images/app_store.svg" class="footer__app_icons"
                    alt="Apple App Store icon, white outline of an apple"></img>
                </a>
              </li>
              <li>
                <a href="" class="footer__column_link" target="_blank">
                  <img src="images/google_play.svg" class="footer__app_icons"
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
