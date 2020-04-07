import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './Component/Banner/Banner';
import Home from './Component/Home/Home';
import Appointment from './Component/Appointment/Appointment';
import AppointmentForm from './Component/AppointmentForm/AppointmentForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/appointmentForm">
          <AppointmentForm></AppointmentForm>
        </Route>

      </Router>
    </div>
  );
}

export default App;
