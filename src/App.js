import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Appointment from "./Component/Appointment/Appointment";
import AppointmentForm from "./Component/AppointmentForm/AppointmentForm";
import AppointmentList from "./Component/AppointmentList/AppointmentList";
import Dashboard from "./Component/Dashboard/Dashboard";
import Patients from "./Component/Patients/Patients";
import Prescriptions from "./Component/Prescriptions/Prescriptions";
import NotFound from "./Component/NotFound/NotFound";
import Nav from "./Component/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/appointmentForm">
            <AppointmentForm></AppointmentForm>
          </Route>
          <Route path="/doctor/appointmentList">
            <AppointmentList></AppointmentList>
          </Route>
          <Route path="/doctor/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/doctor/patients">
            <Patients></Patients>
          </Route>
          <Route path="/doctor/prescription">
            <Nav></Nav>
            <Prescriptions></Prescriptions>
          </Route>
          <Route path="*/">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
