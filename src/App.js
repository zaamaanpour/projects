import { Route, Routes } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Movie from "./Component/Movie";
import Footer from "./Component/Footer";
import FAQS from "./Component/FAQS";
import AboutUs from "./Component/AboutUs";

import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";

import NavbarEn from "./Component/NavbarEn";
import HeroEn from "./Component/HeroEn";
import AboutEn from "./Component/AboutEn";
import MovieEn from "./Component/MovieEn";
import FooterEn from "./Component/FooterEn";
import SignUpEn from "./Component/SignUpEn";
import SignInEn from "./Component/SignInEn";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Movie />
              <Footer />
            </>
          }
        ></Route>

        <Route path="/signin" element={<SignIn />}>
          {" "}
        </Route>
        <Route path="/signup" element={<SignUp />}>
          {" "}
        </Route>
        <Route
          path="/lotusEn"
          element={
            <>
              <NavbarEn />
              <HeroEn />
              <AboutEn />
              <MovieEn />
              <FooterEn />
            </>
          }
        ></Route>

        <Route
          path="/FAQS"
          element={
            <>
              <Navbar />
              <FAQS />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/aboutus"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        ></Route>

        <Route path="/lotusEn/signupEn" element={<SignUpEn />}></Route>
        <Route path="/lotusEn/signinEn" element={<SignInEn />}></Route>

      </Routes>
    </div>
  );
};

export default App;
