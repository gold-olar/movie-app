import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollIntoView from "../../HOC/ScrollIntoView";
import "./styles.scss";

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollIntoView>
        <Switch>
          <Route path="/" render={() => "Hello World"} />
        </Switch>
      </ScrollIntoView>
    </BrowserRouter>
  );
}

export default App;
