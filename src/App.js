import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import Home from './pages/Home';
import Proffys from './pages/Proffys';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/proffys" component={Proffys} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
