import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./Hero";
import Login from "./login";
import Signup from "./signup";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
