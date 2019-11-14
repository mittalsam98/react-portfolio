import React,{Component} from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ScrollableAnchor from 'react-scrollable-anchor'
import {BrowserRouter as Router} from 'react-router-dom';
 import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Education from './components/Education/Education';
import Interest from './components/skills/Interest'
import CarouselImages from './components/carousel/CarouselImages.js'


class App extends Component {

  render(){
  return (
    <Router>
      <div className="App">
          <div className="side">
            <Sidebar />
          </div>
            <div className="main">
                 <CarouselImages />
                 <About />
                <Education />
                <Interest />
            </div>
      </div>
   </Router>
  );
  }
}

export default App;
