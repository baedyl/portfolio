import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Dev404 from './components/Dev404';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import RespNavBar from './components/RespNavBar';


function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <RespNavBar/>
        
        
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={ Home } />
            {/* <Route path="/about" component={ About } /> */}
            <Route path="/projects" component={ Projects } />
            <Route path="/blog" component={ Dev404 } />
            <Route path="/contact" component={ Contact } />
            <Route path="/Dev404" component={ Dev404 } />
            <Route component={ NotFound } />
          </Switch>
        </header>
      </div>
    </HashRouter>
    
  );
}

export default App;
