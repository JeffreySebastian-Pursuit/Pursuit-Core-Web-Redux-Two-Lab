import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import TodosContainer from "../containers/TodosContainer";
import FormContainer from "../containers/FormContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route exact path="/todos" component={TodosContainer} />
        <Route path="/todos/new" component={FormContainer} />
      </Switch>
    </div>
  );
}

export default App;
