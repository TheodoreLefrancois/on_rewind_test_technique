import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Funzone from "./Components/Funzone";
import Testimonials from "./Components/Testimonials";
function MyRouter() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Funzone">
            <Funzone />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MyRouter;
