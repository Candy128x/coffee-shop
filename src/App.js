import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Menu from './Menu';
import MenuDetail from './MenuDetail';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      {/* <Route path="/home" exact component={Home}/> */}
      <Route path="/menu" exact component={Menu}/>
      <Route path="/menu/:id/" component={MenuDetail}/>
      <Route path="/about" exact component={About}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
