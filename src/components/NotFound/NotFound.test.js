import React from "react";
import { unmountComponentAtNode } from "react-dom";
import ReactDOM from "react-dom";
import NotFound from "./index";
import renderer from "react-test-renderer";
import { PAGE_NOT_FOUND } from "../../util/constants";
import { BrowserRouter } from "react-router-dom";

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
    <NotFound type={PAGE_NOT_FOUND} message="message" />
  </BrowserRouter>
);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(testComponent, div);
});

test("should match snapshot", () => {
  const component = renderer.create(testComponent);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
