import React from "react";

const Content = (props) => {
  return (
    <div className="hero-rectangle">
      <div className="hero-rectangle__bg">
        <img
          src="https://www.ozolniekuvsk.lv/wp-content/uploads/2021/06/Ozolnieku_vsk.png"
          alt="Skats uz Ventspils Mākslas skolas no augšas"
          rel="noreferrer"
        />
      </div>
      <div className="wrapper">
        <div className="hero-rectangle__col">
          <img
            className="hero-rectangle__image"
            src="http://www.ozolniekuvsk.lv/wp-content/uploads/2021/06/Ozolnieku_vsk-1570x962-c-default.png"
            alt="Skats uz Ventspils Mākslas skolas no augšas"
            rel="noreferrer"
          />

          <h2 className="hero-rectangle__title">Ventspils Mākslas skola</h2>

          <div className="hero-rectangle__desc">
            Draudzīgs, atbalstošs un radošs kolektīvs. Plašas, mūsdienīgi
            aprīkotas telpas un sporta zāle. Labiekārtots stadions un mācībām
            piemērota skolas apkārtne.
          </div>
          <div class="hero-rectangle__more">
          <a href="https://www.ozolniekuvsk.lv/par-skolu/dokumenti/" title="Dokumenti" target="_blank" rel="noopener" class="link">
            <span>Dokumenti</span>
            <svg width="14" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.333.667L7.6 1.4l4 4.067H.333v1.066H11.6l-4 4.067.733.733L13.667 6z" fill-rule="evenodd"></path>
            </svg>
          </a>        
         </div>
        </div>
        <div className="hero-rectangle__col">
          <div className="hero-rectangle__links">
            <ul className="quick-links quick-links--simple ">
              <li className="quick-links__item">
                <a
                  href={process.env.REACT_APP_URL_TO_REDIRECT}
                  title="Stundu izmaiņas"
                  target="_blank"
                  className="link "
                  rel="noreferrer"
                >
                  <span>Stundu izmaiņas</span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="quick-links__item">
                <a
                  href={process.env.REACT_APP_URL_TO_REDIRECT}
                  title="Stundu saraksts"
                  target="_blank"
                  rel="noreferrer"
                  className="link "
                >
                  <span>Stundu saraksts</span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="quick-links__item">
                <a
                  href={process.env.REACT_APP_URL_TO_REDIRECT}
                  title="Autobusu saraksts"
                  target="_blank"
                  rel="noreferrer"
                  className="link "
                >
                  <span>Autobusu saraksts</span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="quick-links__item">
                <a
                  href={process.env.REACT_APP_URL_TO_REDIRECT}
                  title="Ēdināšana"
                  target="_blank"
                  rel="noreferrer"
                  className="link "
                >
                  <span>Ēdināšana</span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
