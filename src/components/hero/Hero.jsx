import React from "preact";
import "../../styles/style.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__bg">
        <img
          src="https://www.ozolniekuvsk.lv/wp-content/uploads/2021/06/Ozolnieku_vsk.png"
          alt="Skats uz Ventspils Mākslas skolas no augšas"
          rel="noreferrer"
        />
      </div>
      <div className="wrapper">
        <div className="hero__col">
          <img
            className="hero__image"
            src="http://www.ozolniekuvsk.lv/wp-content/uploads/2021/06/Ozolnieku_vsk-1570x962-c-default.png"
            alt="Skats uz Ventspils Mākslas skolas no augšas"
            rel="noreferrer"
          />

          <h2 className="hero__title">Ventspils Mākslas skola</h2>

          <div className="hero__desc">
            Draudzīgs, atbalstošs un radošs kolektīvs. Plašas, mūsdienīgi
            aprīkotas telpas un sporta zāle. Labiekārtots stadions un mācībām
            piemērota skolas apkārtne.
          </div>
        </div>
        <div className="hero__col">
          <div className="hero__links">
            <ul className="quick-links quick-links--simple ">
              <li className="quick-links__item">
                <a
                  href={"/school-astry-test/contact"}
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
                  href={"/school-astry-test/contact"}
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
                  href={"/school-astry-test/contact"}
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
                  href={"/school-astry-test/contact"}
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

export default Hero;
