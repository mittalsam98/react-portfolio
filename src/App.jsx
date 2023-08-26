import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx';
import About from './components/about/About.jsx';
import Education from './components/Education/Education.jsx';
import Interest from './components/skills/Interest.jsx';
import Projects from './components/Projects/Projects.jsx';
import CarouselImages from './components/Carousel/Carousel.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='side'>
            <nav className='navbar side navbar-expand-lg navbar-light p-0'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                style={{ zIndex: '1' }}
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <Sidebar />
              </div>
            </nav>
          </div>
          <div className='main'>
            <CarouselImages />
            <Projects />
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
