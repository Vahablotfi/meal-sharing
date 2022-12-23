import React from "react";
import HomePageHeader from "./HomePageHeader";
import ReviewsPage from "../../components/Reviews/ReviewsPage";
import SampleMenu from "../../components/meal-components/SampleMenu";
import "./homepageStyles.css";

function HomePage() {
  return (
    <div className="container">
      <div className="container__section">
        <HomePageHeader />
      </div>
      <div className="container__section">
        <SampleMenu />
      </div>
      <div className="container__section">
        <ReviewsPage />
      </div>
    </div>
  );
}

export default HomePage;


