import { Route, Switch } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./component/Home";
import Contact from "./screens/Contact";
import Work from "./screens/Work";
import About from "./screens/About";
import FitnessTracker from "./screens/FitnessTracker";
import Kitchintory from "./screens/Kitchintory";
import HealthElite from "./screens/HealthElite";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/myfittrack">
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
      </Layout>
    </div>
  );
}

export default App;
