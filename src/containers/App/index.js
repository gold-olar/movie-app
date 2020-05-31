import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollIntoView from "../../HOC/ScrollIntoView";
import "./styles.scss";
import NavigationBar from "../../components/NavigationBar";
import LandingPage from "../LandingPage";
import SeriesPage from '../SeriesPage';
import Footer from "../../components/Footer";
import NotFoundPage from "../NotFoundPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollIntoView>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/series" exact component={SeriesPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer/>
      </ScrollIntoView>
    </BrowserRouter>
  );
}

export default App;
