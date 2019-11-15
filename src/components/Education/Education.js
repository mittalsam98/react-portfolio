import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                        <h2 className={classes.head}>Education</h2>
                        <div className={classes.Education}>
                        <h4>Graduation</h4>
                        <p>Currently pursuing Bachelor of Technolgy 3rd year from <a href="http://sliet.ac.in/">Sant Longowal Institute of Engineerng and Technolgy</a> in Computer Science and Engineering. </p>
                        <h4>Senior Secondary</h4>
                        <p>Passed with 85% from CBSE board from Hare Krishna International Senior Secondary School. </p>
                        <h4>10th</h4>
                        <p>Passed with 9.8 cgpa from CBSE board from GVM Public School. </p>
                        </div>
                    </ScrollAnimation>
                </div>
     
        )
    }
}

export default Education;
