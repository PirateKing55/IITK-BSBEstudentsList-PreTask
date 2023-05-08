//
import React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

const rootContainer = document.getElementById("root");

// creating root :-
const root = ReactDOM.createRoot(rootContainer);

// rendering the element to the root :-
root.render(<App />);
