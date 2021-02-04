import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>APP Develpoment</h3>
                <p>I also have knowledge of flutter development and have experience in building android and IOS applications. I also have live app published on Google Play Store. </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>I am a full stack web developer(MERN) and build websites using HTML, CSS, Javascript, ReactJs.<br /> I have also good grasp on Node and NoSQL(MongoDb)</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>I also have decent hand in developing website with WordPress.<br /> Adobe Photoshop, Adobe Illustrator, MS Office, C++, Github are my other fields of interest. </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;