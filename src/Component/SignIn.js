import { Link } from "react-router-dom";
import styles from "../css/signIn.module.css"

const SignIn = () => {
    return (
            <div className={styles.container}>

                <div className={styles.logoBox}>
                    <Link to={"/"}>
                        <div className={styles.logo}>
                            <img src={process.env.PUBLIC_URL+  "/img/logo.svg"} />
                        </div>
                        </Link>
                </div>

                <div className={styles.container2}>
                    <div className={`${styles.reg}  ${styles.flexRow}`}>
                    <Link to={"/"}>
                            <img src={process.env.PUBLIC_URL + "/img/arrow-right (1).svg"} alt="" />
                            </Link>
                        <p>ورود</p>
                    </div>

                    <div className={`${styles.phon}  ${styles.flexRow}` }>
                        <div className={styles.number}>
                            <p>شماره موبایل</p>
                            <input type="tel" placeholder="مثال: ۹xxxxxxxx" />
                        </div>
                        <div className={styles.areaCode}>
                            <p>پیش شماره</p>
                            <input type="tel" placeholder="98" />
                        </div>
                        <div className={`${styles.plus} ${styles.flexRow}`}><span>+</span></div>
                    </div>

                    <div className={styles.passwordTitle}>
                        <p>گذرواژه</p>
                    </div>

                    <div className={styles.password}>
                        <input type="password" autocomplete="on" />
                            <img src={process.env.PUBLIC_URL + "/img/eye-slash.svg"} alt="" />
                            </div>


                            <a href="" className={styles.forgetPassword}>
                                <p>رمز عبور خود را فراموش کرده اید؟</p>
                            </a>

                            <div className={styles.signInSide}>
                                <button className={styles.signInButton}>
                                    <p className={styles.relative}>ورود</p>
                                </button>
                            </div>

                            <div className={`${styles.signin}  ${styles.flexRow}`}>
                                <p>حساب کاربری ندارید ؟</p>
                                <Link to={"/signup"}>
                                    <p> ثبت نام کنید. </p>
                                </Link>
                            </div>
                    </div>
                </div>
            

            );
};

            export default SignIn;