import React from "react";
import AddMeal from "../../components/BookingForms/AddMeal";
import "./HomePageHeader.css";
import { useState } from "react";
import PopUp from "../../components/popUpComponent/PopUp";

function HomePageHeader() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div>
      <div className="homePage-picture">
        <div className="homePage-text">
          <h1>Lorem ipsum dolor sit Lorem ipsum dolor sit</h1>
          <p className="homePage-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel .
          </p>
          <button onClick={() => setOpenForm(true)} className="homePage-btn">
            Become Host
          </button>
          <PopUp open={openForm}>
            <AddMeal closePopUp={() => setOpenForm(false)} />
          </PopUp>
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;


