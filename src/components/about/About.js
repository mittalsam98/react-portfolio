import React, { Component } from 'react'
import classes from './About.module.css';

class About extends Component {
    render() {
        return (
            <div className={classes.box}>
                <h2  className={classes.head}>About me</h2>
                <div className={classes.About}>
                    <p> I am a 3rd year student currently pursuing B.tech in Computer Science from Sant Longowal Institute of Engineering and Technology. I want to be a developer as I am interested developing new things which excite me a lot. I started writing blog so if you see any spelling mistake and grammer mistake you can correct me. I am a learner and love to learn new technolgy.  </p>
                </div>
            </div>
        )
    }
}

export default About;