import style from "../css/mainEn.module.css";


const FooterEn= () => {
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
                        Track market trends and manage your workflow across all your business systems with NEW
                        continuously analyzing the market data for what matters to every business. Start with NEW now!
                        </p>
                    </div>
                </div>

                <div className={style.pages}>
                    <p>Pages</p>
                    <br />
                    <a href="#" target="_blank"> FAQs</a>
                    <br />
                    <a href="#" target="_blank">  About us</a>
                    <br />
                    <a href="#" target="_blank"> Terms & Conditions</a>
                </div>

                <div className={style.contactUs}>
                    <p>Contact Us</p>
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

export default FooterEn;