import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReserveMeal from "./components/BookingForms/ReserveMeal";
import AddMeal from "./components/BookingForms/AddMeal";
import { GlobalProvider } from "./components/DataManager/GlobalProvider";
import MenuList from "./components/MealMenu/MenuList";
import SingleMealPage from "./components/meal-components/SingleMealPage";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./components/navbar /Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Reserve-Meal">
            <ReserveMeal />
          </Route>
          <Route exact path="/Add-Meal">
            <AddMeal />
          </Route>
          <Route exact path="/menu">
            <MenuList></MenuList>
          </Route>
          <Route exact path="/menu/:id">
            <SingleMealPage />
          </Route>
        </Switch>
        <Footer />
      </GlobalProvider>
    </Router>
  );
}

export default App;
