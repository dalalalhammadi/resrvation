import React from "react";
import Information from "./componenets/Information";
import Storepage from "./componenets/Storepage";
import AllReservation from "./componenets/AllReservation";
import Signin from "./componenets/Signin";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/allreservation">
          <AllReservation />
        </Route>
        <Route path="/storepage">
          <Storepage />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <Information />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
