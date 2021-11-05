//import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./Hero";
import Login from "./login";
import Signup from "./signup";
import Reserve from "./ReservePage";
import Thankyou from "./Thankyou";
import Home from "./Home";
import FormCheckout from "./FormCheckout";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/homepage">
            <Home />
          </Route>
          <Route exact path="/reservepage">
            <Reserve />
          </Route>
          <Route exact path="/thankyou">
            <Thankyou />
          </Route>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <FormCheckout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
