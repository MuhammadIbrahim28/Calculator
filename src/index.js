import React from "react";
import ReactDom from "react-dom";
import { add, mult, sub, divi } from "./calculator.js";
ReactDom.render(
  <ul>
    <li>{add(2, 2)}</li>
    <li>{mult(2, 2)}</li>
    <li>{sub(2, 2)}</li>
    <li>{divi(2, 4)}</li>
  </ul>,
  document.getElementById("root")
);
