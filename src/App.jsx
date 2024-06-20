import React from "react";
import { createRoot } from "react-dom";
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, ["Dog"]),
    React.createElement("h3", {}, ["Husky"]),
    React.createElement("h3", {}, ["5 years old"]),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement(Pet),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
