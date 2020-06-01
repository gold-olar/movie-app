import React from "react";
import { BrowserRouter } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";
import ReactDOM from "react-dom";
import NavigationBar from "./index";
import renderer from "react-test-renderer";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
const testComponent = (
  <BrowserRouter>
    <NavigationBar type="series" description="any string" path="/path" />{" "}
  </BrowserRouter>
);
describe("Navigation Bar", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
  });

  test("should match snapshot", () => {
    const component = renderer.create(testComponent);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
