import logo from './logo.svg';
import './App.css';
import Donor from "./Donor";
import PatientSignUp from "./PatientSignUp";

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
            <PatientSignUp />
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
