import { Link } from "react-router-dom";
import styles from "../css/signIn.module.css"

const SignInEn = () => {
    return (
            <div className={styles.container}>

                <div className={styles.logoBox}>
                    <Link to={"/lotusEn"}>
                        <div className={styles.logo}>
                            <img src={process.env.PUBLIC_URL+  "/img/logo.svg"} />
                        </div>
                        </Link>
                </div>

                <div className={styles.container2}>
                    <div className={`${styles.reg}  ${styles.flexRow}`}>
                    <Link to={"/lotusEn"}>
                            <img src={process.env.PUBLIC_URL + "/img/arrow-right (1).svg"} alt="" />
                            </Link>
                        <p>Login</p>
                    </div>

                    <div className={`${styles.phon}  ${styles.flexRow}` }>
                        <div className={styles.number}>
                            <p>Phone number</p>
                            <input type="tel" placeholder="Example: 9xxxxxxxx"  />
                        </div>
                        <div className={styles.areaCode}>
                            <p>code</p>
                            <input type="tel" placeholder="98" />
                        </div>
                        <div className={`${styles.plus} ${styles.flexRow}`}><span>+</span></div>
                    </div>

                    <div className={styles.passwordTitle}>
                        <p>Password</p>
                    </div>

                    <div className={styles.password}>
                        <input type="password" autocomplete="on" />
                            <img src={process.env.PUBLIC_URL + "/img/eye-slash.svg"} alt="" />
                            </div>


                            <a href="" className={styles.forgetPassword}>
                                <p>forget password</p>
                            </a>

                            <div className={styles.signInSide}>
                                <button className={styles.signInButton}>
                                    <p className={styles.relative}>Signin</p>
                                </button>
                            </div>

                            <div className={`${styles.signin}  ${styles.flexRow}`}>
                                <p>?Haven’t registered yet </p>
                                <Link to={"/lotusEn/signupEn"}>
                                    <p>  Register  </p>
                                </Link>
                            </div>
                    </div>
                </div>
            

            );
};

            export default SignInEn;


            