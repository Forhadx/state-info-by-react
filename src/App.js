import React from "react";
import { Route, Switch } from "react-router-dom";

import AdminPanel from "./AdminPanel/AdmintPanel";
import StatePage from "./StatePage/StatePage";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={AdminPanel} />
        <Route path="/" component={StatePage} />
      </Switch>
    </div>
  );
};

export default App;
