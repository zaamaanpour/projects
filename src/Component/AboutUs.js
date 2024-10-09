import style from "../css/aboutus.module.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
            <div className={style.aboutUsContainer}>
                <div className={style.aboutUs}>
                    <div className={style.aboutUsTitle}>
                        <h1>درباره ما</h1>
                    </div>

                    <div className={style.aboutUsLink}>
                        <Link to={"/"}>خانه</Link>
                        <Link to={"/"}>
                            <img
                                src={process.env.PUBLIC_URL + "img/arrow-right (2).svg"}
                                alt=""
                            />
                        </Link>

                        <span> درباره ما</span>
                    </div>
                </div>
            </div>

            <div className={style.aboutDescriptionContainer}>
                <div className={style.aboutDescription}>
                    <div className={style.textContainer}>
                        <p>
                            NEW یک عامل هوش مصنوعی است که با مشارک یک تیم مهندسی با رهبری آقای
                            دکتر کیوان جعفری طرانی در اردیبهشت ماه سال 1402 مصادف با 20 امین
                            سالگرد تاسیس شرکت جامع تجارت فعالیت خود را آغاز نمود.
                        </p>
                        <br />
                        <p>
                            NEW از روشهای نوین هوش مصنوعی و یادگیری ماشین و داده های تاریخی سنگ
                            آهن برای مدلسازی بازار و پیش بینی قیمت سنگ آهن استفاده میکند.
                        </p>
                        <br />
                        <p>
                            در حال حاضر اولین ویرایش NEW در خرداد ماه 1403 عرضه اشت. هدف ما
                            ارائه یک مدل برای تصمیم گیری بر مبنای داده در بازار تجارت مواد معدنی
                            است. با این هدف، تیم ما معتقد است که NEW در تجارت مواد معدنی با
                            افزایش تعامل تجاران و بازار تاثیر مثبی در این سیستم ایجاد نماید. ما
                            بر این باوریم که هوش مصنوعی میتواند به شرکت ها برای مدیریت همه
                            جانبههای کسب و کار آنها کمک نماید
                        </p>
                        <br />
                        
                            <br />
                            <p>تیم NEW</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
