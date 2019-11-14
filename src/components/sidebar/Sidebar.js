import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';

// import pic from '../images'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                <h1><Link smooth to="/#start" className="h1_links">Sachin Mittal</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}}><i className="fa fa-envelope"> mittalsam98@gmail.com </i></p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                </ul>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p className="flip-card-items" style={{color:'black'}}>Social Profile's</p>
                            <small style={{color:'black'}}>HOVER OVER ME</small>
                        </div>
                        <div class="flip-card-back">
                            <ul className="sidebar-nav">
                                <li className="sidebar-nav-icons"> <a href="https://twitter.com/Sachin_Mittal98" target="_blank" className="fa fa-twitter fa-lg"></a></li>
                                <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/sachin-mittal-476174158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoRhF2EUsQJ%2BygJpLEZb%2FFA%3D%3D" target="_blank" class="fa fa-linkedin fa-lg"></a></li>
                                <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/profile.php?id=100011989067867" target="_blank" class="fa fa-facebook fa-lg"></a></li>
                                <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/decent_sachin.mittal/" target="_blank" class="fa fa-instagram fa-lg"></a></li>
                                <li className="sidebar-nav-icons"> <a href="https://github.com/mittalsam98" target="_blank" class="fa fa-github fa-lg"></a></li>
                            </ul>
                        </div>
                    </div>
                 </div>
              
            </div>
        )
    }
}

export default Sidebar