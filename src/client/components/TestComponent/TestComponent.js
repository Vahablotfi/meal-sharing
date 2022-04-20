/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */

// import PropTypes from "prop-types";
import React, { useContext } from "react";
import { GlobalContext } from "./GlobalProvider";
import "./testComponentStyle.css";
// import hyf from "./assets/images";

export default function TestComponent() {
  const meals = useContext(GlobalContext);
  // const mealTitle = meals.map((meal) => meal.title);

  // const mealTitle = async meals.map( ( meal ) => {
  //   await meal.title;
  // })
  const date = new Date();
  // console.log(new Intl.DateTimeFormat("default", options).format(date));
  console.log(date);
  return (
    <section className="test-component">
      <p>in a component</p>
      {meals.map((meal, index) => (
        <div key={index}>
          {meal.title}
          <img src="/Pasta.jpg" alt="hyf-logo"></img>
        </div>
      ))}
    </section>
  );
}





/*


        
*/