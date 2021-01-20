import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Funzone from "./Components/Funzone";
import Testimonials from "./Components/Testimonials";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function MyRouter() {
  const { KEY, ENDPOINT } = process.env;
  const httpLink = createHttpLink({
    uri: "https://staging-graphql-service.onrewind.tv/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    const token = "SyT0uHf3I";
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

  const handleClick = (e) => {
    e.preventDefault();
    console.log(ENDPOINT, KEY);
  };
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
            <Route exact path="/testimonials">
              <Testimonials />
            </Route>
          </Switch>
          <button onClick={handleClick}>
            Click here to see the datas in the .env file
          </button>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default MyRouter;
