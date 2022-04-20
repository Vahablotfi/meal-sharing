import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./components/TestComponent/GlobalProvider";
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <p>test</p>
      </Route>
      <Route exact path="/lol">
        <p>lol</p>
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
