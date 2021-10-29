import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./Hero";
function App() {
  return (
    <Router>
      <Hero />
    </Router>
  );
}

export default App;
