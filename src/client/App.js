import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookMeal from "./components/BookingForms/BookMeal";
import { GlobalProvider } from "./components/DataManager/GlobalProvider";
import MenuList from "./components/meal-components/MenuList";
import SingleMeal from "./components/meal-components/SingleMeal";
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Route exact path="/">
          <p>test</p>
        </Route>
        <Route exact path="/Book-Meal">
          <BookMeal />
        </Route>
        <Route exact path="/menu">
          <MenuList></MenuList>
        </Route>
        <Route exact path="/menu/:id">
          <SingleMeal />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </GlobalProvider>
    </Router>
  );
}

export default App;
