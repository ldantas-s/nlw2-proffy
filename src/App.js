import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import Home from './pages/Home';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
