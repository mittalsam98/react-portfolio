import React, { Component } from 'react';
import './Sidebar.css';

// import pic from '../images'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                <h1 >Sachin Mittal</h1>
                <p style={{color:'black',fontWeight:'bold'}}><i className="fa fa-envelope"> mittalsam98@gmail.com </i></p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items">Introduction</li>
                    <li className="sidebar-nav-items"><a >About</a></li>
                </ul>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p className="flip-card-items" style={{color:'black'}}>Social Profile's</p>
                            <small style={{color:'black'}}>HOVER OVER ME</small>
                        </div>
                        <div class="flip-card-back">
                            <ul className="sidebar-nav">
                                <li className="sidebar-nav-icons"> <a href="#" className="fa fa-twitter fa-lg"></a></li>
                                <li className="sidebar-nav-icons"><a href="#" class="fa fa-linkedin fa-lg"></a></li>
                                <li className="sidebar-nav-icons"> <a href="#" class="fa fa-facebook fa-lg"></a></li>
                                <li className="sidebar-nav-icons"> <a href="#" class="fa fa-instagram fa-lg"></a></li>
                                <li className="sidebar-nav-icons"> <a href="#" class="fa fa-github fa-lg"></a></li>
                            </ul>
                        </div>
                    </div>
                 </div>
              
            </div>
        )
    }
}

export default Sidebar