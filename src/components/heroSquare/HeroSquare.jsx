import React from "react";

const Content = (props) => {
    return (
        <div>
            <div class="hero-square">
                <div class="hero-square__bg">
                    <img src="https://www.garozaspamatskola.lv/wp-content/uploads/2021/08/edit_DSC01771-2.jpg" alt="Garozas pamatskolas ēka vasarā" />
                </div>
                <div class="wrapper">
                    <div class="hero-square__col">
                        <img class="hero-square__image" src="http://www.garozaspamatskola.lv/wp-content/uploads/2021/08/edit_DSC01771-2-1570x962-c-default.jpg" alt="Garozas pamatskolas ēka vasarā" />
                        <div class="hero-square__logo">
                            <img src="https://www.garozaspamatskola.lv/wp-content/uploads/2022/06/Skolas-logo-Jelgavas-novads.png" alt="Garozas pamatskolas logo - ozola zars ar zēnu un meiteni" width="126px" height="126px" />
                            <span class="hero-square__logo-back"></span>
                        </div>
                    </div>
                    <div class="hero-square__col">
                        <div class="hero-square__content">
                            <h2 class="hero-square__title">
                                Garozas pamatskola
                            </h2>
                            <div class="hero-square__desc">
                                Mūsu skola ir kā otrā ģimene gan pedagogiem, gan skolēniem. Šeit visi viens otru pazīst. Ja kādam nepieciešams atbalsts un palīdzība, tas tiek dots.
                            </div>
                            <div class="hero-square__more">
                                <a href="http://www.garozaspamatskola.lv/par-skolu/" title="Vairāk par skolu" class="link ">
                                    <span>Vairāk par skolu</span>
                                    <svg width="14" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.333.667L7.6 1.4l4 4.067H.333v1.066H11.6l-4 4.067.733.733L13.667 6z" fill-rule="evenodd"></path>
                                    </svg>
                                </a>          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-square__links">
                <div class="wrapper">
                    <ul class="quick-links quick-links--horizontal quick-links--large">
                        <li class="quick-links__item">
                            <a class="quick-links__link" href="http://www.garozaspamatskola.lv/sakumlapa/stundu-laiki/" target="">
                                Stundu laiki
                                <svg width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z" fill-rule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="quick-links__item">
                            <a class="quick-links__link" href="http://www.garozaspamatskola.lv/sakumlapa/edinasana/" target="">
                                Ēdināšana
                                <svg width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z" fill-rule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="quick-links__item">
                            <a class="quick-links__link" href="http://www.garozaspamatskola.lv/sakumlapa/skolas-autobuss/" target="">
                                Skolas autobuss
                                <svg width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z" fill-rule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="quick-links__item">
                            <a class="quick-links__link" href="https://www.garozaspamatskola.lv/stundu-izmainas/" target="">
                                Stundu izmaiņas
                                <svg width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z" fill-rule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Content;
