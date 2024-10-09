import style from "../css/signup.module.css";
import { Link } from "react-router-dom";


const SignUpEn= () => {
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
                <Link to={"/lotusEn"}>
                    <img src={process.env.PUBLIC_URL +"/img/arrow-right (1).svg"} alt="" />
                 </Link>
                <p>Sign Up</p>
            </div>

            <div className={`${style.phon}  ${style.flexRow}` }>
                <div className={style.number}>
                    <p>Phone number</p>
                    <input type="tel" placeholder="Example: 9xxxxxxxx" />
                </div>
                <div className={style.areaCode}>
                    <p>Code</p>
                    <input type="tel" placeholder="98" />
                </div>
                <div className={`${style.plus} ${style.flexRow}`}><span>+</span></div>
            </div>


            <div className={style.signUpSide}>
                <button className={style.signUpButton}>
                    <p className={style.relative}>Send Verification Code</p>
                </button>
            </div>

            <div className={`${style.login}  ${style.flexRow}`}>
                <p>?Already have an account</p>
                <Link to={"/lotusEn/signinEn"}>
                    <p> Sign in </p>
                </Link>
            </div>
        </div>
    </div>

    );
};

export default SignUpEn;