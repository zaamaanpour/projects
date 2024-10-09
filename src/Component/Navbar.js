import React from "react";
import { Link } from "react-router-dom";
import style from "../css/mainFA.module.css";
import { useState ,useEffect } from "react";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); 
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById(style.myDropdown);
      if (dropdown && !dropdown.contains(event.target) && !event.target.matches(`.${style.dropbtn}`)) {
        setDropdownOpen(false); 
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside); 
    };
  }, []);

  return (
    <div className={`${style.navbarContainer} ${style.flexRow}`}>
      <div className={style.nav}>
        <Link className={style.logoA} to={"/"}>
          <div className={style.navLogo}>
            <img src={process.env.PUBLIC_URL + "img/logo.svg"} alt="" />
          </div>
        </Link>

        <div className={`${style.navbarButton} ${style.flexRow}`}>
          <div className={`${style.lang} ${style.flexRow}`}>
            <div className={style.languageDropdown}>
              <button className={style.dropbtn} onClick={toggleDropdown}>
                ▼ Fa
              </button>
              {dropdownOpen && ( 
                <div id={style.myDropdown} className={`${style.dropdownContent} ${dropdownOpen ? style.show : ''}`}>
                  <Link to="/">Fa</Link>
                  <Link to="/lotusEn" onClick={() => console.log("Switching to English")}>En</Link>
                  </div>
              )}
            </div>

            <div className={style.globalImg}>
              <img src={process.env.PUBLIC_URL + "img/global.svg"} alt="" />
            </div>
          </div>

          <div className={style.login}>
            <Link to={"/signin"} style={{ color: "white" }}> ورود </Link>
          </div>

          <div className={style.signUP}>
          <Link to={"/signup"} > ثبت نام </Link>

          </div>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
