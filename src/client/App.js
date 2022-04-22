import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealCards from "./components/mealcards/MealCards";
import { GlobalProvider } from "./components/TestComponent/GlobalProvider";
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <p>test</p>
      </Route>
      <Route exact path="/menu">
        <MealCards></MealCards>
      </Route>
      <Route exact path="/test-component">
        <GlobalProvider>
          <TestComponent></TestComponent>
        </GlobalProvider>
      </Route>
    </Router>
  );
}

export default App;
