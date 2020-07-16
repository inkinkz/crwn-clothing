import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/hatspage/hatspage.component";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop/hats" component={HatsPage}></Route>
    </div>
  );
};

export default App;
