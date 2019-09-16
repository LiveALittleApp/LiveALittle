import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Navigation from "./components/Navbar/navbar";
import TopNav from './components/TopNav/topNav';



function App() {
  return (
   
      <Router>
        <TopNav/>
        <Navigation />
     
        <div>
          
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/dashboard" component={Dashboard} />    
        </div>
      
      </Router>
   

  );
}

export default App;
