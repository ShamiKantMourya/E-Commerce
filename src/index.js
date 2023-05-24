import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";

import { AuthProvider , AuthContext } from "./frontend/Contexts/AuthContext";
import { DataContext } from "./frontend/Contexts/DataContext";

// Call make Server

export {AuthContext};
export {DataContext};
makeServer();


ReactDOM.render(
  <React.StrictMode>
    <Router >
    <AuthProvider>
          <App />
    </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
