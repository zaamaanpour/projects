import style from "../css/mainEn.module.css";

const MovieEn = () => {
  return (
    <div className={style.movieContainer}>
      <div className={style.movieBackground}>
        <div className={style.movie}>
          <div className={style.movieTitle}>
            <p>Video on NEW</p>
          </div>

          <div className={style.movieBody}>
            <div className={style.movieDescription}>
              <div className={style.movieDescriptionTitle}>
                <p className={style.gray}>
                    NEW, a novel AI model that uses cutting-edge machine learning techniques to predict Iron
                    ore prices. NEW is revolutionizing AI technology in business at all levels. Your AI
                    partner that predicts Iron ore prices for develop and transfer your business.
                </p>
                <br />
                <p className={style.gray}> Here are some advantages choosing NEW as your AI partner:</p>
              </div>

              <div className={style.description}>
              <img src={process.env.PUBLIC_URL +"./img/arrow-right.svg"} alt="" className={style.rotate} />
              <p>
              Alongside AL, ML statistical learning and historical data, we used the strong background
                of Dr. Keyvan Jafari Tehrani in mineral trade and business to model the market
                behaviors.
                </p>
              </div>

              <div className={style.description}>
                <img src={process.env.PUBLIC_URL +"./img/arrow-right.svg"} alt="" className={style.rotate} />
                <p>
                NEW is adjusted to the market movements, therefore, it will help you grow your business
                by finding opportunities and managing risks.
                </p>
              </div>

              <div className={style.description}>
              <img src={process.env.PUBLIC_URL +"./img/arrow-right.svg"} alt="" className={style.rotate} />
              <p>
              NEW will warn you if there is a risk of sudden fluctuation.                </p>
              </div>
            </div>

            <div className={style.video}>
              <video id="NEWVideo" controls> 
                <source src={process.env.PUBLIC_URL + "/video/sample.mp4"} type="video/mp4"/>
              </video>
              <p className={style.gray}>Please click on this video to see more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieEn;
