import style from "../css/mainFA.module.css";

const Movie = () => {
  return (
    <div className={style.movieContainer}>
      <div className={style.movieBackground}>
        <div className={style.movie}>
          <div className={style.movieTitle}>
            <p>با دیدن فیلم NEW را تجربه کنید.</p>
          </div>

          <div className={style.movieBody}>
            <div className={style.movieDescription}>
              <div className={style.movieDescriptionTitle}>
                <p className={style.gray}>
                  NEW ، یک مدل نوین هوش مصنوعی است که از روش های به روز یادگیری
                  ماشین برای پیش بینی قیمت سنگ آهن و تحلیل بازار استفاده می
                  کند.NEW ، همکار هوش مصنوعی شما است تا در توسعه و تغییر کسب و
                  کارتان یاریتان کند.
                </p>
                <br />
                <p className={style.gray}>با مزایای استفاده از NEW آشنا شوید!</p>
              </div>

              <div className={style.description}>
              <img src={process.env.PUBLIC_URL +"./img/arrow-right.svg"} alt="" className={style.rotate} />
              <p>
                  در این پروژه علاوه بر اینکه از روش های هوش مصنوعی، یادگیری
                  ماشین و داده های پیشین قیمت سنگ آهن، در مدلسازی، از بیش از 30
                  سال تجربه آقای دکتر کیوان جعفری طهرانی در تحلیل بازار و تجارت
                  سنگ آهن برای پیش بینی رفتار بازار استفاده شد.
                </p>
              </div>

              <div className={style.description}>
                <img src={process.env.PUBLIC_URL +"./img/arrow-right.svg"} alt="" className={style.rotate} />
                <p>
                  NEW خود را با تغییرات بازار به روز میکند تا شما را در مدیریت
                  ریسک و یافتن فرصتهای تجاری یاری کند.
                </p>
              </div>

              <div className={style.description}>
              <img src={process.env.PUBLIC_URL +"./img/arrow-right.svg"} alt="" className={style.rotate} />
              <p>
                  NEW احتمال هرگونه تغییرات ناگهانی بازار را به شما اطلاع میدهد.
                </p>
              </div>
            </div>

            <div className={style.video}>
              <video id="NEWVideo" controls> 
                <source src={process.env.PUBLIC_URL + "/video/sample.mp4"} type="video/mp4"/>
              </video>
              <p className={style.gray}>لطفا بر روی فیلم کلیک نمایید.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
