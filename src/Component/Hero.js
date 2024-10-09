import style from "../css/mainFA.module.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(`.${style.NEWanimatins} span`);
    let index = 0;
    let intervalId;
    function showNextSpan() {
      spans[index].classList.remove(style.hidden);
      spans[index].style.animationName = "NEWanimation";
      index++;
      if (index >= spans.length) {
        clearInterval(intervalId);
        setTimeout(restartAnimation, 6000);
      }
    }
    function restartAnimation() {
      index = 0;
      spans.forEach((span) => {
        span.classList.add(style.hidden);
        span.style.animationName = "";
      });
      intervalId = setInterval(showNextSpan, 100);
    }
    intervalId = setInterval(showNextSpan, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={style.heroContainer}>
      <div className={style.heroContainerBg}>
        <div className={style.hero}>
          <div className={style.heroRight}>
            <div className={style.heroTitle}>
              <div className={style.heroTitleFa}>
                <span className={style.bold}>آینده</span>
                <span></span>
                <span className={style.bold}> بازار مواد معدنی </span>
                <span> اینجا با </span>
              </div>

              <div className={style.NEWanimatins}>
                <span className={`${style.animation1} ${style.hidden} ${style.bold}`}>N</span>
                <span className={`${style.animation1} ${style.hidden} ${style.bold}`}>E</span>
                <span className={`${style.animation1} ${style.hidden} ${style.bold}`}>W</span>
                <span className={`${style.animation1} ${style.hidden} ${style.space}`}></span>
                <span className={`${style.animation1} ${style.hidden}`}>i</span>
                <span className={`${style.animation1} ${style.hidden}`}>s</span>
                <span className={`${style.animation1} ${style.hidden} ${style.space}`}></span>
                <span className={`${style.animation1} ${style.hidden} ${style.thin}`}>N</span>
                <span className={`${style.animation1} ${style.hidden} ${style.thin}`}>E</span>
                <span className={`${style.animation1} ${style.hidden} ${style.thin}`}>W</span>
              </div>
            </div>

            <div className={style.heroInfo}>
              <p>
                با NEW روند بازار پیش روی شماست، از آن برای بهبود تجارت خود
                استفاده کنید. NEW به طور پیوسته داده های بازار را مورد تحلیل
                قرار می دهد تا نتایج به روز در اختیار شما قرارگیرد.
              </p>
              <br />
              <br />
              <p className={style.startNow}>همین الان شروع کنید!</p>
            </div>
          </div>

          <div className={style.heroLeft}>
            <div className={style.heroImg}>
              <img src={process.env.PUBLIC_URL + "./img/trade2.png"} alt="" />
            </div>

            <div className={style.one}>
              <div className={style.two}></div>
              <div className={style.three}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
