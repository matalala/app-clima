import React,{useState} from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';
import Ciudad from './components/Ciudad.jsx'
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import {Cairns} from './data.js';
//import cities from './data'
import Nav from './components/Nav';
function App() {
  const [cities,setCities]= useState([])
  function onBuscar(props){
    setCities((oldCities => [...oldCities, ...props]));
    
  }
  function onFilter(id){
    return cities.filter(c => c.id === parseInt(id))
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.unico !== id));
  }
  return(
  <div className='conten'>
  <h1 className='title'>Api de clima
   </h1>
  {/* <Nav onBuscar={onBuscar}/>
  
  <Cards cities={cities} onClose={onClose} /> */}
  <Router>
    <Nav onBuscar={onBuscar}/>
    <Switch>
    <Route exact path='/'>
      <Cards cities={cities} onClose={onClose}/>
    </Route>
    <Route path='/about'>
    <h1>about</h1>
    </Route>
    <Route
    exact path='/ciudad/:ciudadId'>
     <Ciudad city={onFilter}/>
    </Route>
    
    </Switch>
  </Router>
  </div>
  )
};

export default App;
