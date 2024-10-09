import style from "../css/mainFA.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.about}>
        <div className={style.aboutTitle}>
          <p>NEW همه آن چیزی که شما در جست و جوی آنید</p>
        </div>

        <div className={style.aboutBody}>
          <div className={style.aboutDescription}>
            <div className={style.aboutImg}>
              <img src={process.env.PUBLIC_URL + "img/business.svg"} alt="" />
            </div>
            <div className={style.aboutInfo}>
              <p className={style.sectionTitle}>تحلیل روند بازار</p>
              <p className={`${style.sectionText} ${style.gray}`}>
                بررسی روند بازار یک ابزار مهم برای هر تجارت و کسب و کاری است.
                نظارت مستمر بر تغییرات بازار، فرصتهای پیش رو را برای شما نمایان
                میکند.
              </p>
            </div>
          </div>

          <div className={style.aboutDescription}>
            <div className={style.aboutImg}>
              <img src={process.env.PUBLIC_URL + "img/predict.svg"} alt="" />
            </div>

            <div className={style.aboutInfo}>
              <p className={style.sectionTitle}>مدیریت ریسک</p>
              <p className={`${style.sectionText} ${style.gray}`}>
                با NEW در محیط کسب و کار پیچیده و متغیر امروز از دارایی و اعتبار
                خود محافظت کنید.
              </p>
            </div>
          </div>

          <div className={style.aboutDescription}>
            <div className={style.aboutImg}>
              <img src={process.env.PUBLIC_URL +"img/ml.svg"} alt="" />
            </div>
            <div className={style.aboutInfo}>
              <p className={style.sectionTitle}>
                استفاده از به روزترین مدلهای یادگیری ماشین
              </p>
              <p className={`${style.sectionText} ${style.gray}`}>
                NEW، یک پلتفرم هوش مصنوعی است که با استفاده از روش های به روز
                یادگیری ماشین، تجارت مواد معدنی را متحول میکند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
