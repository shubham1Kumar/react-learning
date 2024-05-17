import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// console.log(App)

// we can also create our own react Elementment

const reactEl = React.createElement("a", {
  href: "https://google.com",
  target: "_blank",
  children: "Click To Visit Google",
});
console.log(reactEl);
ReactDOM.createRoot(document.getElementById("root")).render(
  // in .jsx we use <App/> to excute the function bcs in the end we import app func from app.jsx
  // <App />
  // App()
  // reactEl
  // we dont use () with reactEl bcs its parse into object and its not funtion   
);
