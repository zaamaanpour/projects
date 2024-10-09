import style from "../css/FAQS.module.css";
import { Link } from "react-router-dom";

const FAQS = () => {
  return (
    <>
      <div className={style.aboutUsContainer}>
        <div className={style.aboutUs}>
          <div className={style.aboutUsTitle}>
            <h1>سوالات شما</h1>
          </div>

          <div className={style.aboutUsLink}>
            <Link to={"/"}>خانه</Link>
            <Link to={"/"}>
            <img
                src={process.env.PUBLIC_URL + "img/arrow-right (2).svg"}
                alt=""
              />
            </Link>

            <span> سوالات شما</span>
          </div>
        </div>
      </div>

      <div className={style.aboutDescriptionContainer}>
        <div className={style.aboutDescription}>
          <div className={style.textContainer}>
            <h3>NEW چیست؟</h3>
            <p>
              NEW یک مدل نوین هوش مصنوعی است که از روشهای به روز یادگیری ماشین
              برای پیش بینی قیمت سنگ آهن و تحلیل بازار استفاده میکند. با NEW
              روند بازار پیش روی شماست، از آن برای بهبود تجارت خود استفاده کنید.
              NEW به طور پیوسته داده های بازار را مورد تحلیل قرار میدهد تا نتایج
              به روز در اختیار شما قرارگیرد.
            </p>
            <br />

            <h3>چه طور میتوانم از NEW استفاده کنم؟</h3>
            <p>با عضویت در نیو میتواند از NEW استفاده کنید.</p>
            <br />

            <h3>آیا می توانم درخواست بازپرداخت هزینه عضویت را داشته باشم؟</h3>
            <p>خیر. بازپرداخت وجه امکان پذیر نخواهد بود.</p>
            <br />

            <h3>چطور میتوانم با NEW همکاری کنیم؟</h3>
            <br />
            <p>
              ما در NEW به چرخش اطلاعات و همکاری با متخصصان معتقدیم. پس برای
              همکاری با ما تماس حاصل نمایید.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQS;
