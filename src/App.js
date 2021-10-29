import React from "react";
import Home from "./Home";
import 'react-bootstrap';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/'>
          <Home />
        </Route>
      </div>
    </Router>

  );
}

export default App;
