import React, { Component } from 'react'
import classes from './Interest.module.css';

class Interest extends Component {
    render() {
        return (
            <div className={classes.box}>
                <h2  className={classes.head}>Interest</h2>
                <div className={classes.Interest}>
                    <div className={classes.web}>
                      <h4>Web Develpoment</h4>
                      <p>I am a full stack web developer. I know HTML, CSS ,Javascript. I love to build websites with React. I have also some knowledge of MERN stack.</p>
                    </div>
                    <div className={classes.app}>
                      <h4>APP Develpoment</h4>
                      <p>I am also learning React-Native</p>
                    </div>
                    <div className={classes.other}>
                      <h4>Other's Interest</h4>
                      <p>Adobe Photoshop, MS Office, C++,Github,Java</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interest ;