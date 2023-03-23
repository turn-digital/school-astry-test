import React from "preact";
import "../../styles/style.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer" aria-label="Lapas kājene">
        <div className="wrapper">
          <p className="footer__title">Ventspils Mākslas skola</p>
          <p className="footer__desc">
            <a
              className="footer__menu-link"
              href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
              title="Jelgavas iela 35, Ozolnieki, Jelgavas novads, LV-3018"
              target="_blank"
              rel="noreferrer"
            >
              <span>Jelgavas iela 35, Ozolnieki, Jelgavas novads, LV-3018</span>
            </a>
          </p>

          <div className="footer__menus">
            <ul className="footer__menu footer__menu--main">
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-29">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Sākumlapa"
                >
                  <span>Sākumlapa</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-368 menu-item-has-children">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Uzņemšana"
                >
                  <span>Uzņemšana</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-192 menu-item-has-children">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Par skolu"
                >
                  <span>Par skolu</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-custom menu-item-object-custom menu-item-3316 menu-item-has-children">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Projekti"
                >
                  <span>Projekti</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-28 menu-item-has-children">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Kontakti"
                >
                  <span>Kontakti</span>
                </a>
              </li>
            </ul>

            <ul className="footer__menu footer__menu--add">
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-1839">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Stundu izmaiņas"
                >
                  <span>Stundu izmaiņas</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-custom menu-item-object-custom menu-item-1855">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Stundu saraksts"
                >
                  <span>Stundu saraksts</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-custom menu-item-object-custom menu-item-4056">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Konsultāciju grafiks"
                >
                  <span>Konsultāciju grafiks</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-1840">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Dokumenti"
                >
                  <span>Dokumenti</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-custom menu-item-object-custom menu-item-4249">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Bibliotēkas katalogs"
                >
                  <span>Bibliotēkas katalogs</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-1600">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Mūsu vide"
                >
                  <span>Mūsu vide</span>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-1599">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Telpu noma"
                >
                  <span>Telpu noma</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0v1h6.295L0 9.295.705 10 9 1.705V8h1V0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-1601">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Saites"
                >
                  <span>Saites</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__bottom">
            <ul className="footer__menu footer__menu--privacy">
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-4192">
                <a
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Piekļūstamības paziņojums"
                  className="link link--space-sm"
                >
                  <span>Piekļūstamības paziņojums</span>
                </a>{" "}
              </li>
              <li className="footer__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-4193">
                <a
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Privātuma politika"
                  className="link link--space-sm"
                >
                  <span>Privātuma politika</span>
                </a>{" "}
              </li>
            </ul>

            <ul className="footer__menu footer__menu--social">
              <li className="footer__menu-item  menu-item menu-item-type-custom menu-item-object-custom menu-item-193">
                <a
                  className="footer__menu-link"
                  href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                  title="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.003 0H.997C.448.004.004.448 0 .998v16.005c.004.549.448.993.998.997h8.617v-6.96h-2.34V8.318h2.34V6.315c0-2.325 1.418-3.593 3.502-3.593.698 0 1.395 0 2.093.106V5.25h-1.433c-1.132 0-1.35.54-1.35 1.327V8.31h2.7l-.352 2.723h-2.348V18h4.576c.549-.004.993-.448.997-.997V.997A1.005 1.005 0 0017.003 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__copy">
          <strong>
            <a
              href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
              target="_blank"
              rel="noreferrer"
            >
              SchoolioWP - skolām radīta platforma!
            </a>
          </strong>
          <br />© 2023 Turn Digital, all Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
