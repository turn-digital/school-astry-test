import React from "preact";
import "../../styles/style.scss";

const Header = () => {
  return (
    <>
      <header id="flyoutnavkbbtn" className="header" role="banner">
        <div className="wrapper">
          <div className="header__content">
            <h1 className="header__title">
              <a
                href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                title="Ventspils Mākslas skola"
                className="link link--invert"
              >
                <span>Ventspils Mākslas skola</span>
              </a>{" "}
            </h1>

            <nav id="navigat" className="header__menu header__menu--desktop">
              <ul className="header__menu-items menu">
                <li
                  id="evnt-list"
                  className="menu-item menu-link header__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-29  "
                >
                  <a
                    className="header__menu-link menu-link"
                    href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                    title="Sākumlapa"
                  >
                    <span>Sākumlapa</span>
                  </a>
                </li>
                <li
                  id="evnt-list"
                  className="menu-item menu-link header__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-368 menu-item-has-children has-submenu "
                >
                  <a
                    className="header__menu-link menu-link"
                    href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                    title="Uzņemšana"
                  >
                    <span>Uzņemšana</span>
                  </a>

                  <button className="header__menu-btn header__menu-btn--chev">
                    <span>
                      <span className="visuallyhidden">
                        Izvērst nolaižamo sarakstu
                      </span>
                    </span>
                  </button>
                  <ul className="header__submenu menu-link sub-menu">
                    <li className="header__submenu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2475 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Uzņemšanas kārtība
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="evnt-list"
                  className="menu-item menu-link header__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-192 menu-item-has-children has-submenu "
                >
                  <a
                    className="header__menu-link menu-link"
                    href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                    title="Par skolu"
                  >
                    <span>Par skolu</span>
                  </a>

                  <button className="header__menu-btn header__menu-btn--chev">
                    <span>
                      <span className="visuallyhidden">
                        Izvērst nolaižamo sarakstu
                      </span>
                    </span>
                  </button>
                  <ul className="header__submenu menu-link sub-menu">
                    <li className="header__submenu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2476 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Ārpusstundu aktivitātes
                      </a>
                    </li>
                    <li className="header__submenu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2477 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Mūsu vide
                      </a>
                    </li>
                    <li className="header__submenu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2479 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Atbalsta komanda
                      </a>
                    </li>
                    <li className="header__submenu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2478 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Dokumenti
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="evnt-list"
                  className="menu-item menu-link header__menu-item  menu-item menu-item-type-custom menu-item-object-custom menu-item-3316 menu-item-has-children has-submenu "
                >
                  <a
                    className="header__menu-link menu-link"
                    href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                    title="Projekti"
                  >
                    <span>Projekti</span>
                  </a>

                  <button className="header__menu-btn header__menu-btn--chev">
                    <span>
                      <span className="visuallyhidden">
                        Izvērst nolaižamo sarakstu
                      </span>
                    </span>
                  </button>
                  <ul className="header__submenu menu-link sub-menu">
                    <li className="header__submenu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-3341 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Erasmus+ KA1
                      </a>
                    </li>
                    <li className="header__submenu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-3371 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Erasmus+ KA2
                      </a>
                    </li>
                    <li className="header__submenu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-3393 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        UNESKO
                      </a>
                    </li>
                    <li className="header__submenu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-3394 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        ESF projekti
                      </a>
                    </li>
                    <li className="header__submenu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-3344 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        EKO
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="evnt-list"
                  className="menu-item menu-link header__menu-item  menu-item menu-item-type-post_type menu-item-object-page menu-item-28 menu-item-has-children has-submenu "
                >
                  <a
                    className="header__menu-link menu-link"
                    href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                    title="Kontakti"
                  >
                    <span>Kontakti</span>
                  </a>

                  <button className="header__menu-btn header__menu-btn--chev">
                    <span>
                      <span className="visuallyhidden">
                        Izvērst nolaižamo sarakstu
                      </span>
                    </span>
                  </button>
                  <ul className="header__submenu menu-link sub-menu">
                    <li className="header__submenu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2480 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Atbalsta personāls
                      </a>
                    </li>
                    <li className="header__submenu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2481 menu-item menu-link ">
                      <a
                        className="header__link "
                        href={import.meta.env.PUBLIC_CONTACT_PAGE_URL}
                      >
                        Bibliotēka
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className="header__menu header__menu--mobile">
              <button onClick={() => {}} className="header__menu-btn">
                <svg width="18" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6h18v2H0zM0 0h18v2H0zM0 12h18v2H0z"></path>
                </svg>
                Izvēlnes ikona
              </button>
              <span>Izvēlne</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
