import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollIntoView from "../../HOC/ScrollIntoView";
import "./styles.scss";
import NavigationBar from "../../components/NavigationBar";
import LandingPage from "../LandingPage";
import MovieList from "../MovieList";
import Footer from "../../components/Footer";
import NotFoundPage from "../NotFoundPage";
import { PAGE_NOT_FOUND, SERIES, MOVIES } from "../../util/constants";

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollIntoView>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route
            path="/series"
            exact
            render={() => <MovieList type={SERIES} />}
          />
          <Route
            path="/movies"
            exact
            render={() => <MovieList type={MOVIES} />}
          />
          <Route
            path="*"
            render={(routerProps) => (
              <NotFoundPage
                type={PAGE_NOT_FOUND}
                history={routerProps.history}
              />
            )}
          />
        </Switch>
        <Footer />
      </ScrollIntoView>
    </BrowserRouter>
  );
}

export default App;
