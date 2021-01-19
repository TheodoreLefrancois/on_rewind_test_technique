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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/funzone">
            <Funzone />
          </Route>
          <Route exact path="/testimonials">
            <Testimonials />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MyRouter;
