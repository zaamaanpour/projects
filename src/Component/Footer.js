import { Link } from "react-router-dom";
import style from "../css/mainFA.module.css";


const Footer= () => {
    return(
        <div className={style.footerContainer}>
        <div className={style.footer}>
            <div className={`${style.topsideFooter} ${style.flexRow}`}>
                <div className={style.footerDescription}>
                    <div className={style.footerLogo}>
                        <img src={process.env.PUBLIC_URL + "img/logo.svg"} alt="" />
                    </div>
                    <div>
                        <p>
                            با NEW روند بازار پیش روی شماست، از آن برای بهبود تجارت خود
                            استفاده کنید. NEW بهطور پیوسته داده های بازار را مورد تحلیل قرار
                            میدهد تا نتایج به روز در اختیار شما قرارگیرد. همین الان شروع
                            کنید! .
                        </p>
                    </div>
                </div>

                <div className={style.pages}>
                    <p>صفحات</p>
                    <br />
                    <Link to={"/FAQS"} target="-blank"> سوالات شما </Link>
                    <br />
                    <Link to={"/aboutus"} target="-blank"> درباره ما </Link>
                </div>

                <div className={style.contactUs}>
                    <p>ارتباط با ما</p>
                    <div className={style.social}>
                        <a href="https://www.linkedin.com/company/new-is-new"><img src={process.env.PUBLIC_URL +"./img/linkedin.svg"} alt="" /> </a>
                        <a href="/"><img src={process.env.PUBLIC_URL +"./img/contactus.svg"} alt="" /> </a>
                    </div>
                </div>
            </div>

            <div className={style.downsideFooter}>
                <div>
                    <p>All Rights Reserve</p>
                </div>

            </div>
        </div>
    </div>


    );
};

export default Footer;