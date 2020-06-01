import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ReactDOM from 'react-dom'
import Footer from "./index";

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

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

it("renders footer text", () => {
  act(() => {
    render(<Footer />, container);
  });
  expect(container.textContent).toBe(
    "© 2020 Olamide Samuel. All rights reserved."
  );
});


