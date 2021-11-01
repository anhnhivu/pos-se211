import React from "react";
import Home from "./Home";
import FormCheckout from "./FormCheckout"
import 'react-bootstrap';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/checkout'>
            <FormCheckout />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
