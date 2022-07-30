import React,  { useState } from 'react'
import LoginPage from './LoginPage';
import Dashboard from './DashboardComponents/Dashboard';
import { HashRouter, Route} from "react-router-dom";

function App() {
  
  return (
     <div className="App">    
        <HashRouter>
          <Route exact path = "/" component={LoginPage}></Route>
          <Route path = "/dashboard" component={Dashboard}></Route>
        </HashRouter>

    </div> 
  );
}

export default App;
