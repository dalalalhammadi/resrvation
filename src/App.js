import React from "react";
import Information from "./componenets/Information";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Information />
      </Route>
    </div>
  );
}

export default App;
