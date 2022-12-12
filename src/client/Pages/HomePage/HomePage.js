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


