import React from 'react'
import LoginPage from './LoginPage';
import Dashboard from './DashboardComponents/Dashboard';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
 
  return (
     <div className="App">    
        <Router>
          <Route exact path = "/" component={LoginPage}></Route>
          <Route path = "/dashboard" component={Dashboard}></Route>
        </Router>
    </div> 
  );
}

export default App;
