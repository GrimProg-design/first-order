import "./Home.css";
import { useEffect } from "react";
import burana from "../../assets/burana.jpeg";
import sonkol from "../../assets/son-kol.jpeg";
import isukkul from "../../assets/isuk-kul.jpeg";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="con">
      <header>
        <h1 className="fade-up">Kyrgyzstan</h1>
        <div className="artic-wrap fade-up">
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <a href="#form">
            <button className="tours">Тур</button>
          </a>
        </div>
      </header>

      <main>
        <div className="divider fade-up">О туре</div>

        <div className="about fade-up">
          <div className="text-con">
            <p>
              Посещаем самые красивые места Кыргызстана — Иссык-Куль, Сон-Куль,
              Джети-Огуз и другие легендарные локации. Незабываемые виды, эмоции
              и дух свободы ждут тебя!
            </p>
            <br />
            <br />
            <br />
            <p>
              Мы — команда, которая превращает путешествия по Кыргызстану в
              настоящее приключение. Покажем страну так, как её видят местные —
              живо, ярко и с душой.
            </p>
          </div>

          <div className="photo-con fade-up">

            <div className="tour-line">
              <img
                src={burana}
                alt="Башня бурана"
                className="tour-photo"
              />
              <div className="wrap">
                <p>Башня Бурана</p>
              </div>
            </div>
            <div className="tour-line">

              <img
                src={sonkol}
                alt="Сон Куль"
                className="tour-photo second-photo"
              />
              <div className="wrap wrap-sec">
                <p>Сон Куль</p>
              </div>
            </div>
            <div className="tour-line">
              <img src={isukkul} alt="Ыссык куль" className="tour-photo" />
              <div className="wrap">
                <p>Ыссык Куль</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ending fade-up">
          <div className="include">Что входит в тур</div>
          <div className="includes-con">
            <div className="includes fade-up">
              <h4>Гиды</h4>
              <p className="includes-text">
                Замечательные гиды, которые знают свою работу и лучшие места
              </p>
            </div>
            <div className="includes fade-up">
              <h4>Перемещение</h4>
              <p className="includes-text">
                На самолёте, машине или автобусе — комфортно и быстро
              </p>
            </div>
            <div className="includes fade-up">
              <h4>Трансферы</h4>
              <p className="includes-text">
                Доставим вас из аэропорта в гостиницу
              </p>
            </div>
            <div className="includes fade-up">
              <h4>Отели</h4>
              <p className="includes-text">
                Уютные номера с прекрасными видами
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="fade-up">
        <form id="form">
          <p className="form-title">Хочешь присоединиться?</p>
          <input type="text" name="name" placeholder="Ваше имя" />
          <input type="text" name="lastname" placeholder="Ваша фамилия" />
        </form>
      </footer>
    </div>
  );
}
