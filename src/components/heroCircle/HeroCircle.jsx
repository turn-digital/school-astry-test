import React from "react";

const Content = (props) => {
    return (
        <div>
            <div class="hero-circle">
                <div class="wrapper">
                    <div class="hero-circle__col">
                        <div class="hero-circle__image">
                            <img class="hero-circle__image-item" src="https://www.salgalesmms.lv/wp-content/uploads/2021/07/intro-bilde.png" alt="Vizuāli plastiskās mākslas klase ar molbertiem un saksofonu un eifoniju centrā" />
                            <div class="hero-circle__logo">
                                <img src="https://www.salgalesmms.lv/wp-content/uploads/2021/07/Salgales-MMS-logo.png" alt="Salgales Muzikas un mākslas skolas logo" />
                                <span class="hero-circle__logo-back"></span>
                            </div>
                        </div>
                    </div>
                    <div class="hero-circle__col">
                        <div class="hero-circle__logo">
                            <img src="https://www.salgalesmms.lv/wp-content/uploads/2021/07/Salgales-MMS-logo.png" alt="Salgales Muzikas un mākslas skolas logo" />
                            <span class="hero-circle__logo-back"></span>
                        </div>

                        <h2 class="hero-circle__title">
                            Salgales Mūzikas un mākslas skola
                        </h2>

                        <div class="hero-circle__desc">
                            "Sabalso Mūziku, Mākslu Sevī"
                        </div>
                        <div class="hero-circle__links">
                            <ul class="quick-links quick-links--simple ">
                                <li class="quick-links__item">
                                    <a href="https://www.salgalesmms.lv/sakumlapa/nodarbibu-grafiks/" title="Nodarbību grafiki" class="link ">
                                        <span>Nodarbību grafiki</span>
                                        <svg width="14" height="14" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z" fill-rule="evenodd"></path>
                                        </svg>
                                    </a>                
                                </li>
                                <li class="quick-links__item">
                                    <a href="https://www.salgalesmms.lv/uznemsana/muzikas-makslas-izglitibas-programmas/" title="Programmu piedāvājums" class="link ">
                                        <span>Programmu piedāvājums</span>
                                        <svg width="14" height="14" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z" fill-rule="evenodd"></path>
                                        </svg>
                                    </a>                
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hero-circle__waves">
                    <div class="hero-circle__wave">
                        <img src="https://www.salgalesmms.lv/wp-content/themes/svp-child/assets/images/fons.png" alt="background" />
                        <img src="https://www.salgalesmms.lv/wp-content/themes/svp-child/assets/images/fons.png" alt="background" />
                        <img src="https://www.salgalesmms.lv/wp-content/themes/svp-child/assets/images/fons.png" alt="background" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
