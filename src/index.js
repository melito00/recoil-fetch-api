import React from "react";
import ReactDOM from "react-dom";
import RecoilNexus from "recoil-nexus";
import { RecoilRoot } from "recoil";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  rootElement
);
