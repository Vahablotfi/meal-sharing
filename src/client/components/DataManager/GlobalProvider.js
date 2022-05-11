import React, { createContext } from "react";
import useFetch from "./useFetch";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { data: meals } = useFetch("/api/meals");
  const { data: mealsWithBookings } = useFetch("/api/mealsPlus");
  const { data: reviews } = useFetch("/api/reviews");

  function spotCounter(obj) {
    const availableSpots =
      parseInt(obj.max_number_of_guests) - parseInt(obj.reserved_guests);
    return {
      ...obj,
      availableSpots,
    };
  }
  function AddBookingLimit(obj) {
    const availableSpots = parseInt(obj.max_number_of_guests);
    const meal_id = obj.id;
    return {
      ...obj,
      availableSpots,
      meal_id,
    };
  }
  function dataFixer(array1, array2) {
    const mealsWithSpots = array2.map(spotCounter);

    const leftFromExtra = array1.filter(
      (a1) => !array2.find((a2) => a1.id === a2.meal_id)
    );

    const addedLimit = leftFromExtra.map(AddBookingLimit);
    const finalResult = mealsWithSpots.concat(addedLimit);
    return finalResult;
  }

  return (
    <GlobalContext.Provider
      value={{
        meals: dataFixer(meals, mealsWithBookings),
        reviews: reviews,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

