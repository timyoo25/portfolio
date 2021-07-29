import { Route, Switch } from "react-router-dom";

import Nav from "./component/Nav";
import Home from "./component/Home";
import Contact from "./screens/Contact";
import Work from "./screens/Work";

import "./App.css";
import FitnessTracker from "./screens/FitnessTracker";
import Kitchintory from "./screens/Kitchintory";
import HealthElite from "./screens/HealthElite";

function App() {
  return (
    <div className="App">
      <Nav>
        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/fitnesstracker">
            <FitnessTracker />
          </Route>
          <Route path="/kitchintory">
            <Kitchintory />
          </Route>
          <Route path="/healthelite">
            <HealthElite />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Nav>
    </div>
  );
}

export default App;
