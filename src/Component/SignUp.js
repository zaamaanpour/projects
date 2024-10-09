import style from "../css/signup.module.css";
import { Link } from "react-router-dom";


const SignUp= () => {
    return(
        <div className={style.container}>

        <div className={style.logoBox}>
            <a href="">
                <div className={style.logo}>
                    <img src={process.env.PUBLIC_URL +"/img/logo.svg" }/>
                </div>
            </a>
        </div>

        <div className={style.container2}>
            <div className={`${style.reg} ${style.flexRow}`}>
                <Link to={"/"}>
                    <img src={process.env.PUBLIC_URL +"/img/arrow-right (1).svg"} alt="" />
                 </Link>
                <p>ثبت نام</p>
            </div>

            <div className={`${style.phon}  ${style.flexRow}` }>
                <div className={style.number}>
                    <p>شماره موبایل</p>
                    <input type="tel" placeholder="مثال: ۹xxxxxxxx" />
                </div>
                <div className={style.areaCode}>
                    <p>پیش شماره</p>
                    <input type="tel" placeholder="98" />
                </div>
                <div className={`${style.plus} ${style.flexRow}`}><span>+</span></div>
            </div>


            <div className={style.signUpSide}>
                <button className={style.signUpButton}>
                    <p className={style.relative}>ارسال کد تایید</p>
                </button>
            </div>

            <div className={`${style.login}  ${style.flexRow}`}>
                <p>حساب کاربری دارید ؟</p>
                <Link to={"/signin"}>
                    <p> وارد شوید </p>
                </Link>
            </div>
        </div>
    </div>

    );
};

export default SignUp;