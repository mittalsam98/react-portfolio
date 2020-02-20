import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                     <span  className={classes.head}>EDUCATION</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                                        <article className={classes.timeline_entry}>
                                            <div className={classes.timeline_icon} >
                                            <MdSchool />
                                            </div>
                                            <div className={classes.label}>
                                            <h2 >Undergraduation at SLIET <span>2017-Present</span></h2>
                                            <p>I'm currently completing my undergraduation in CSE (Computer Science and Engineering). </p>
                                            </div>
                                        </article>
                                        </ScrollAnimation>
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='3' animateOnce="true" initiallyVisible ={true}>
                                        <article>
                                            <div className={classes.timeline_icon_2} >
                                                <FaSchool />     
                                            </div>
                                            <div className={classes.label}>
                                            <h2 >Higher Education  <span>2014-2016</span></h2>
                                            <p>I have completed my higher education from HKIS with major subjects as Physics,Chemistry & Maths with 85 merit in CBSE board. </p>
                                            </div>
                                            <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                        </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                        {/* <div className={classes.Education}>
                        <h2 className={classes.heading}>Graduation</h2>
                        <p>Currently pursuing Bachelor of Technolgy 3rd year from <a href="http://sliet.ac.in/">Sant Longowal Institute of Engineerng and Technolgy</a> in Computer Science and Engineering. </p>
                        <h4>Senior Secondary</h4>
                        <p>Passed with 85% from CBSE board from Hare Krishna International Senior Secondary School. </p>
                        <h4>10th</h4>
                        <p>Passed with 9.8 cgpa from CBSE board from GVM Public School. </p>
                        </div> */}
                    </ScrollAnimation>
                </div>
     
        )
    }
}

export default Education;
