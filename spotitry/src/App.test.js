import * as React from "react";
import * as ReactDOM from "react-dom";

// This testing is using the Jest frame work with the React Testing Library to use specialized tools

import { App } from "./App";

test('renders the app', () => {
  const root = document.createElement("div");
  render(<App />, root);

});

test('opening the login page', () =>{
  const root = document.createElement("div");
  render (<unauthenticated-app />, root);

});

test("search bar test", () =>{
  const root = document.createElement("div");
  render (<Discover/index.js />, root);
  expect(root.querySelector(styles.searchBar)).toBe("Search Bar");
});

test("testing the time stamps", () =>{
  const root = document.createElement("div");
  render (<Timestamps/index.js />, root);
  expect(root.isPrototypeOf('Timestamps'));
});