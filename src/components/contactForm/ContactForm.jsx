import { useState, useRef, useEffect } from "preact/hooks";
import { sendContactForm } from "../../services/index";
import Logo from "../../images/schoolio-logo.png";
import "../../styles/style.scss";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    const res = await sendContactForm({
      schoolName: schoolName,
      email: e.target[0].value,
    });
    if (res === 0) {
      setMessage("Thank you for your email");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };
  let schoolName = "";
  useEffect(() => {
    schoolName = window.host;
  }, []);

  return (
    <main class="wrapper contacts-form">
      <section class="contacts-form__block">
        <h1 class="contacts-form__head">
          Vai šī ir mūsu skolas jaunā mājas lapa?
        </h1>
        <p class="contacts-form__text">
          Tā var kļūt trīs dienu laikā par 50/Eur mēnesī bez izstrādes izmaksām.
          Katra skola ir pelnījusi tīmekļvietni, ar kuru var lepoties!{" "}
        </p>
        <a
          class="contacts-form__button contacts-form__button--arrow"
          aria-label="Ko tālāk?"
          href="#form"
        >
          Ko tālāk?
        </a>
      </section>
      <section class="contacts-form__block">
        <ul>
          <li class="contacts-form__point">
            <h3 class="contacts-form__subtitle">
              Viens risinājums piekļūstamības prasībām
            </h3>
            <p class="contacts-form__text">
              Atbilstība VARAM noteiktajām vadlīnijām un pieejama cilvēkiem ar
              ierobežojumiem
            </p>
          </li>
          <li class="contacts-form__point">
            <h3 class="contacts-form__subtitle">Paredzamas izmaksas</h3>
            <p class="contacts-form__text">
              Nav izstrādes maksas, tikai uzturēšana. 50 eur mēnesī.
            </p>
          </li>
          <li class="contacts-form__point">
            <h3 class="contacts-form__subtitle">
              Saturu ievietošana tik viegla kā Facebook
            </h3>
            <p class="contacts-form__text">
              Ērta satura ievadīšana. Katram pa spēkam. Vienmēr aktuāls saturs,
              jo to var ievietot jebkurš.
            </p>
          </li>
        </ul>
      </section>
      <section class="contacts-form__box">
        <h2 class="contacts-form__title">
          Vairākas skolas jau izvēlas Schoolio platformu!
        </h2>
        <ul class="contacts-form__list">
          <li class="contacts-form__item">
            <a
              class="contacts-form__link"
              aria-label="Ozolnieku vidusskola"
              href="https://www.salgalesmms.lv/"
            >
              Ozolnieku vidusskola
            </a>
          </li>
          <li class="contacts-form__item">
            <a
              class="contacts-form__link"
              aria-label="Salgales mūzikas un mākslas skola"
              href="https://www.salgalesmms.lv/"
            >
              Salgales mūzikas un mākslas skola
            </a>
          </li>
          <li class="contacts-form__item">
            <a
              class="contacts-form__link"
              aria-label="Ozolnieku vidusskola"
              href="https://www.salgalesmms.lv/"
            >
              Ozolnieku vidusskola
            </a>
          </li>
          <li class="contacts-form__item">
            <a
              class="contacts-form__link"
              aria-label="Salgales mūzikas un mākslas skola"
              href="https://www.salgalesmms.lv/"
            >
              Salgales mūzikas un mākslas skola
            </a>
          </li>
          <li class="contacts-form__item">
            <a
              class="contacts-form__link"
              aria-label="Ozolnieku vidusskola"
              href="https://www.salgalesmms.lv/"
            >
              Ozolnieku vidusskola
            </a>
          </li>
          <li class="contacts-form__item">
            <a
              class="contacts-form__link"
              aria-label="Salgales mūzikas un mākslas skola"
              href="https://www.salgalesmms.lv/"
            >
              Salgales mūzikas un mākslas skola
            </a>
          </li>
        </ul>
      </section>
      <section class="container max-w-2xl text-center">
        <div class="contacts-form__box">
          <h2 class="contacts-form__title">Ko darīt tālāk?</h2>
          <p class="contacts-form__text">
            Sūti informātikas skolotājam vai atbildīgajam par mājaslapu, jo tava
            mājaslapa var izskatīties šādi!
          </p>
          <a class="contacts-form__button" aria-label="Dalīties" href="#form">
            Dalīties
          </a>
          <p class="contacts-form__text contacts-form__text--margin">
            Ievadi savu e-pasta adresi un mēs ar tevi sazināsiemies tuvāko dienu
            laikā
          </p>
        </div>
        <div>
          {message ? (
            <div>{message}</div>
          ) : (
            <form
              id="form"
              ref={formRef}
              onSubmit={submitContact}
              class="contacts-form__form"
            >
              <label for="email" class="contacts-form__text">
                E-pasts
              </label>
              <input
                id="email"
                required
                type={"email"}
                class="contacts-form__input"
              />

              <button
                class="contacts-form__button"
                aria-label="submit"
                type="submit"
              >
                Pieteikties
              </button>
            </form>
          )}
          <img class="contacts-form__img" src={Logo} alt="schoolio logo" />
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
