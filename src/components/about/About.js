import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> I am a 3rd year student currently pursuing my degree in Bachelor of technology in Computer Science and Engineering from Sant Longowal Institute of Engineering and Technology. I want to be a developer as I am interested in developing new things which excite me a lot. :)  </p>
                         <p className={classes.br}>I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years. </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;