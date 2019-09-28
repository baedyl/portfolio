import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Dev404 from './components/Dev404';
import Contact from './components/Contact';
import NavLink from './components/NavLink';
import NotFound from './components/NotFound';
import Projects from './components/Projects';

function App() {
  return (
    <HashRouter basename="/">
      
      <div className="App">
        <nav>
          <NavLink text="Home" link="/" />
          <NavLink text="About" link="/about" />
          <NavLink text="Projects" link="/projects" />
          <NavLink text="Contact" link="/contact" />
        </nav>
        
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" component={ About } />
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
