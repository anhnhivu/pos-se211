import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./Hero";
import Login from "./login";
import Signup from "./signup";
import Reserve from "./ReservePage";
import Thankyou from "./Thankyou";
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
          <Route path="/homepage">This is home page</Route>
          <Route path="/reservepage">
            <Reserve />
          </Route>
          <Route path="/thankyou">
            <Thankyou />
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
