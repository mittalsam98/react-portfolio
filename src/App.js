import React,{Component} from 'react';
import './App.css';
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
            <nav className="navbar side navbar-expand-lg navbar-light p-0" >
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" style={{zIndex:'1'}}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Sidebar />
              </div>
            </nav>  
          </div>
            <div className="main">
              <div>

                 <CarouselImages />
              </div>
                 <About />
                <Interest />
                <Education />
            </div>
      </div>
   </Router>
  );
  }
}

export default App;
