import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Funzone from "./Components/Funzone";
import Testimonials from "./Components/Testimoniales";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import DetailPage from "./Components/DetailPage";

function MyRouter() {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_ENDPOINT,
  });
  const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_KEY;
    return {
      headers: {
        ...headers,
        "x-account-key": token ? token : "",
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <Router>
      <ApolloProvider client={client}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/funzone">
              <Funzone />
            </Route>
            <Route exact path="/testimoniales">
              <Testimonials />
            </Route>
            <Route exact path="/video/:goodId">
              <DetailPage />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default MyRouter;
