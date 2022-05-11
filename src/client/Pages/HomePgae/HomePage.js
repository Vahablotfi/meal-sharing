import React from "react";
import HomePageHeader from "./HomePageHeader";
import Navbar from "../../components/navbar /Navbar";
import ReviewsPage from "../../components/Reviews/ReviewsPage";
import Footer from "../../components/Footer/Footer";
import SampleMenu from "../../components/meal-components/SampleMenu";
import "./homepageStyles.css";

function HomePage() {
  return (
    <div className="container">
      <div className="container__section">
        <Navbar />
        <HomePageHeader />
      </div>
      <div className="container__section">
        <SampleMenu />
      </div>
      <div className="container__section">
        <ReviewsPage />
      </div>
      <div className="container__section">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

/*
  // <div className="home-Page">
    //   <Navbar />
    //   <HomePageHeader />
    // </div>
    <div className="homePage-picture">
        <div className="homePage-text">
          <h1>Lorem ipsum dolor sit Lorem ipsum dolor sit</h1>
          <p className="homePage-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            felis luctus ex in. Sed lobortis in
          </p>
          <button className="homePage-btn">Become Host</button>
        </div>
      </div> 


*/
