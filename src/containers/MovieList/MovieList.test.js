import React from "react";
import { unmountComponentAtNode } from "react-dom";
import ReactDOM from "react-dom";
import MovieList from "./index";
import renderer from "react-test-renderer";
import { SERIES } from "../../util/constants";

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
const testComponent = <MovieList type={SERIES} />;

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(testComponent, div);
});

test("should match snapshot", () => {
  const component = renderer.create(testComponent);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
