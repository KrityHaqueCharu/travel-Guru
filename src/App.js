import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
//import Booking from './Components/Booking/Booking';
import Sajek from './Components/Sajek/Sajek';
import sundorbon from './Components/Sundorbon/Sundorbon';
import coxsBazar from './Components/CoxsBazar/CoxsBazar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sundorbon from './Components/Sundorbon/Sundorbon';
import CoxsBazar from './Components/CoxsBazar/CoxsBazar';
function App() {
  return (
    <div>
      
      <Header></Header>
  <Router> 
 
    <Switch>
      
    <Route path="/home">
    <Nav></Nav>
      </Route>
   
      <Route exact path="/">
      <Nav></Nav>
      </Route>

      <Route path="/sajek">
       <Sajek></Sajek>
       </Route>
     
      <Route path="/sundorbon">
      <Sundorbon></Sundorbon>
       </Route>
     
      
      <Route path="/coxsBazar">
      <CoxsBazar></CoxsBazar>
       </Route>
     
       <Nav></Nav>
     
    </Switch>
</Router>
    </div>
  );
}

export default App;
