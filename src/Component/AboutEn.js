import style from "../css/mainEn.module.css";

const AboutEn = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.about}>
        <div className={style.aboutTitle}>
        <p>NEW knows what you are looking for</p>
        </div>

        <div className={style.aboutBody}>
          <div className={style.aboutDescription}>
            <div className={style.aboutImg}>
              <img src={process.env.PUBLIC_URL + "img/business.svg"} alt="" />
            </div>
            <div className={style.aboutInfo}>
              <p className={style.sectionTitle}>Market Trends Analysis</p>
              <p className={`${style.sectionText} ${style.gray}`}>
                Mapping market trends can be a game-changer for any business.
                Monitoring changes in the market will help you to identify
                patterns and opportunities.
              </p>
            </div>
          </div>

          <div className={style.aboutDescription}>
            <div className={style.aboutImg}>
              <img src={process.env.PUBLIC_URL + "img/predict.svg"} alt="" />
            </div>

            <div className={style.aboutInfo}>
              <p className={style.sectionTitle}>Risk Management</p>
              <p className={`${style.sectionText} ${style.gray}`}>
              With NEW, Protect your asset and reputation in the increasing
              complexities of the business environment.
              </p>
            </div>
          </div>

          <div className={style.aboutDescription}>
            <div className={style.aboutImg}>
              <img src={process.env.PUBLIC_URL +"img/ml.svg"} alt="" />
            </div>
            <div className={style.aboutInfo}>
              <p className={style.sectionTitle}>
              Advanced Machine learning in market and business
              </p>
              <p className={`${style.sectionText} ${style.gray}`}>
              NEW is a platform leverages machine learning and statistical
              models to make changes in the mineral trade industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEn;
