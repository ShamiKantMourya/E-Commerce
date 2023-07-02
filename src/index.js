import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";

import { AuthProvider, AuthContext } from "./frontend/Contexts/AuthContext";
import { FilterContext, FilterProvider } from "./frontend/Contexts/filterContext";
import { DataContext, DataProvider } from "./frontend/Contexts/dataContext";
// Call make Server

export { AuthContext, FilterContext, DataContext };

makeServer();


ReactDOM.render(
  <Router >
    <DataProvider>
      <FilterProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FilterProvider>
    </DataProvider>
  </Router>,

  document.getElementById("root")
);
