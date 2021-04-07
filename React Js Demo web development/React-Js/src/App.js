import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'

import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import CorporateTraining from './Components/pages/CorporateTraining';
import Microsoft from './Components/pages/Microsoft';
import AboutUs from './Components/pages/AboutUs';
import Home from './Components/pages/Home'


function App() {
  return (
   <Router>
   <Navbar/>
   <Switch>
     <Route path='/corporate' exact component={CorporateTraining}/>
     <Route path='/microsoft' exact component={Microsoft}/>
     <Route path='/about' exact component={AboutUs}/>
     <Route path='/' exact component={Home}/>
   </Switch>
   </Router>
   
  
  );
}

export default App;
