/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */

import React, { useContext } from "react";
import FalafelPic from "./FalafelPic";
import { GlobalContext } from "./GlobalProvider";
import "./testComponentStyle.css";

export default function TestComponent() {
  const meals = useContext(GlobalContext);

  const date = new Date();
  console.log(date);
  console.log(new Intl.DateTimeFormat("default").format(date));

  return (
    <section className="test-component">
      <FalafelPic />
      <p>in a component</p>
      {meals.map((meal, index) => (
        <div key={index}>{meal.title}</div>
      ))}
    </section>
  );
}





/*


        
*/