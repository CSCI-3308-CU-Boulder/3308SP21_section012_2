import * as React from "react";
import App from './App'
// This testing is using the Jest frame work with the React Testing Library to use specialized tools


test('renders the app', () => {
  // const root = document.createElement("div");
  const component = renderer(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('opening the login page', () =>{
  const root = document.createElement("div");
  render (<unauthenticated-app />, root);

});

test("search bar test", () =>{
  const root = document.createElement("div");
  render (<Discover/>, root);
  expect(root.querySelector(styles.searchBar)).toBe("Search Bar");
});

test("testing the time stamps", () =>{
  const root = document.createElement("div");
  render (<Timestamps/>, root);
  expect(root.isPrototypeOf('Timestamps'));
});