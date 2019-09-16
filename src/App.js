import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";


function App() {
  return (
    <Router>
      <div>
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/dashboard" component={Dashboard} />

        
      </div>
    </Router>
  );
}

export default App;
