import React from "react";
import "../../styles/index.scss";

const News = () => {
  return (
    <>
      <section className="home__section home__section--news">
        <div className="wrapper">
          <div className="home__news">
            <div className="home__news-info">
              <h3 className="home__section-title">Aktualitātes</h3>

              <div className="home__news-list home__news-list--two">
                <div className="card-article card-article--large card-article--image">
                  <div
                    className="card-article__image lazyloaded"
                    data-bgset="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/toposo-pirmklasnieku-afisa-2023-labota-652x400.png"
                    style={{
                      backgroundImage:
                        "url(https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/toposo-pirmklasnieku-afisa-2023-labota-652x400.png)",
                    }}
                  >
                    <img
                      className=" lazyloaded"
                      data-src="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/toposo-pirmklasnieku-afisa-2023-labota-652x400.png"
                      alt=""
                      width="100px"
                      src="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/toposo-pirmklasnieku-afisa-2023-labota-652x400.png"
                    />
                    <picture style={{ display: "none" }}>
                      <source
                        data-srcset="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/toposo-pirmklasnieku-afisa-2023-labota-652x400.png"
                        sizes="326px"
                        srcSet="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/toposo-pirmklasnieku-afisa-2023-labota-652x400.png"
                      />
                      <img
                        alt=""
                        className="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="326px"
                      />
                    </picture>
                  </div>

                  <div className="card-article__content">
                    <a
                      href={"/school-astry-test/contact"}
                      className="card-article__link"
                      title="Topošo pirmklasnieku vecāku sapulce"
                    ></a>

                    <h4 className="card-article__title">
                      Topošo pirmklasnieku vecāku sapulce
                    </h4>

                    <div className="card-article__info">
                      <span className="card-article__date">30.01.2023.</span>
                      <span className="card-article__category">
                        Mācību darbs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-article card-article--large card-article--image">
                  <div
                    className="card-article__image lazyloaded"
                    data-bgset="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/001.png"
                    style={{
                      backgroundImage:
                        "url(https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/001.png)",
                    }}
                  >
                    <img
                      className=" lazyloaded"
                      data-src="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/001.png"
                      alt=""
                      width="100px"
                      src="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/001.png"
                    />
                    <picture style={{ display: "none" }}>
                      <source
                        data-srcset="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/001.png"
                        sizes="326px"
                        srcSet="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/001.png"
                      />
                      <img
                        alt=""
                        className="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="326px"
                      />
                    </picture>
                  </div>

                  <div className="card-article__content">
                    <a
                      href={"/school-astry-test/contact"}
                      className="card-article__link"
                      title="Matemātikas nedēļa Ozolnieku vidusskolā"
                    ></a>

                    <h4 className="card-article__title">
                      Matemātikas nedēļa Ozolnieku vidusskolā
                    </h4>

                    <div className="card-article__info">
                      <span className="card-article__date">27.01.2023.</span>
                      <span className="card-article__category">
                        Mācību darbs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-article card-article--small card-article--image">
                  <div
                    className="card-article__image lazyloaded"
                    data-bgset="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/PHOTO-2023-01-25-13-44-47-652x400.jpg"
                    style={{
                      backgroundImage:
                        "url(https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/PHOTO-2023-01-25-13-44-47-652x400.jpg)",
                    }}
                  >
                    <img
                      className=" lazyloaded"
                      data-src="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/PHOTO-2023-01-25-13-44-47-652x400.jpg"
                      alt=""
                      width="100px"
                      src="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/PHOTO-2023-01-25-13-44-47-652x400.jpg"
                    />
                    <picture style={{ display: "none" }}>
                      <source
                        data-srcset="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/PHOTO-2023-01-25-13-44-47-652x400.jpg"
                        sizes="108px"
                        srcSet="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/PHOTO-2023-01-25-13-44-47-652x400.jpg"
                      />
                      <img
                        alt=""
                        className="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="108px"
                      />
                    </picture>
                  </div>

                  <div className="card-article__content">
                    <a
                      href={"/school-astry-test/contact"}
                      className="card-article__link"
                      title="Leču ģimenes stipendija"
                    ></a>

                    <h4 className="card-article__title">
                      Leču ģimenes stipendija
                    </h4>

                    <div className="card-article__info">
                      <span className="card-article__date">26.01.2023.</span>
                      <span className="card-article__category">
                        Mācību darbs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-article card-article--small card-article--image">
                  <div
                    className="card-article__image lazyloaded"
                    data-bgset="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/valstsjaunatnesprogramma-logo_krasains.webp"
                    style={{
                      backgroundImage:
                        "url(https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/valstsjaunatnesprogramma-logo_krasains.webp)",
                    }}
                  >
                    <img
                      className=" lazyloaded"
                      data-src="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/valstsjaunatnesprogramma-logo_krasains.webp"
                      alt=""
                      width="100px"
                      src="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/valstsjaunatnesprogramma-logo_krasains.webp"
                    />
                    <picture style={{ display: "none" }}>
                      <source
                        data-srcset="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/valstsjaunatnesprogramma-logo_krasains.webp"
                        sizes="108px"
                        srcSet="https://www.ozolniekuvsk.lv/wp-content/uploads/2023/01/valstsjaunatnesprogramma-logo_krasains.webp"
                      />
                      <img
                        alt=""
                        className="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="108px"
                      />
                    </picture>
                  </div>

                  <div className="card-article__content">
                    <a
                      href={"/school-astry-test/contact"}
                      className="card-article__link"
                      title="Skolā tapis atpūtas stūrītis"
                    ></a>

                    <h4 className="card-article__title">
                      Skolā tapis atpūtas stūrītis
                    </h4>

                    <div className="card-article__info">
                      <span className="card-article__date">18.01.2023.</span>
                      <span className="card-article__category">
                        Skolēnu dome
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-article card-article--small card-article--image">
                  <div
                    className="card-article__image lazyloaded"
                    data-bgset="https://www.ozolniekuvsk.lv/wp-content/uploads/2022/12/20221221_112645_Zekes-2-652x400.jpg"
                    style={{
                      backgroundImage:
                        "url(https://www.ozolniekuvsk.lv/wp-content/uploads/2022/12/20221221_112645_Zekes-2-652x400.jpg)",
                    }}
                  >
                    <img
                      className=" lazyloaded"
                      data-src="https://www.ozolniekuvsk.lv/wp-content/uploads/2022/12/20221221_112645_Zekes-2-652x400.jpg"
                      alt="Pašadītas zeķes"
                      width="100px"
                      src="https://www.ozolniekuvsk.lv/wp-content/uploads/2022/12/20221221_112645_Zekes-2-652x400.jpg"
                    />
                    <picture style={{ display: "none" }}>
                      <source
                        data-srcset="https://www.ozolniekuvsk.lv/wp-content/uploads/2022/12/20221221_112645_Zekes-2-652x400.jpg"
                        sizes="108px"
                        srcSet="https://www.ozolniekuvsk.lv/wp-content/uploads/2022/12/20221221_112645_Zekes-2-652x400.jpg"
                      />
                      <img
                        alt=""
                        className="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="108px"
                      />
                    </picture>
                  </div>

                  <div className="card-article__content">
                    <a
                      href={"/school-astry-test/contact"}
                      className="card-article__link"
                      title="Noslēgusies vilnas zeķu adīšanas akcija"
                    ></a>

                    <h4 className="card-article__title">
                      Noslēgusies vilnas zeķu adīšanas akcija
                    </h4>

                    <div className="card-article__info">
                      <span className="card-article__date">30.12.2022.</span>
                      <span className="card-article__category">
                        Ārpusstundu darbs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="home__news-more">
                <a
                  href={"/school-astry-test/contact"}
                  title="Visas aktualitātes"
                  className="button "
                >
                  <span>Visas aktualitātes</span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.333.667L7.6 1.4l4 4.067H.333v1.066H11.6l-4 4.067.733.733L13.667 6z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="home__events">
              <h3 className="home__section-title">Pasākumi</h3>

              <div className="card-event">
                <div className="card-event__date">
                  <span>03</span>
                  <span>Feb</span>
                </div>
                <div className="card-event__content">
                  <h4 className="card-event__title">
                    Jelgavas novada matemātikas olimpiāde 9.-12.klasei
                  </h4>
                </div>
              </div>

              <div className="card-event">
                <div className="card-event__date">
                  <span>07</span>
                  <span>Feb</span>
                </div>
                <div className="card-event__content">
                  <h4 className="card-event__title">
                    Ģeogrāfijas olimpiāde 10.-12.kl. (novadu posms)
                  </h4>
                </div>
              </div>

              <div className="card-event">
                <div className="card-event__date">
                  <span>08</span>
                  <span>Feb</span>
                </div>
                <div className="card-event__content">
                  <h4 className="card-event__title">
                    “Tik vai … Cik?” matemātikas konkursa 4.klasēm 3.kārta
                  </h4>
                </div>
              </div>

              <div className="card-event">
                <div className="card-event__date">
                  <span>08</span>
                  <span>Feb</span>
                </div>
                <div className="card-event__content">
                  <h4 className="card-event__title">
                    Skolēnu domes tikšanās- “Tēja ar direktori”
                  </h4>
                </div>
              </div>

              <div className="card-event">
                <div className="card-event__date">
                  <span>09</span>
                  <span>Feb</span>
                </div>
                <div className="card-event__content">
                  <h4 className="card-event__title">
                    Latviešu valodas un literatūras olimpiāde 8.-9.kl. (novadu
                    posms)
                  </h4>
                </div>
              </div>

              <div className="home__news-more">
                <a
                  href={"/school-astry-test/contact"}
                  title="Visi pasākumi"
                  className="button "
                >
                  <span>Visi pasākumi</span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.333.667L7.6 1.4l4 4.067H.333v1.066H11.6l-4 4.067.733.733L13.667 6z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
