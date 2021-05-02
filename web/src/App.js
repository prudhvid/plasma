import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Donor from "./Donor";
import PatientSignUp from "./PatientSignUp";
import PatientHomePage from './PatientHomePage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/donor">
            <Donor />
          </Route>
          <Route path="/patient">
            <PatientHomePage />
          </Route>
          <Route path="">
            <Donor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// export default App;
