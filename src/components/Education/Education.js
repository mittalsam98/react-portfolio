import React, { Component } from 'react';
import classes from './Education.module.css';

class Education extends Component {
    render() {
        return (
            <div className={classes.box}>
            <h2 className={classes.head}>Education</h2>
            <div className={classes.Education}>
            <h4>Senior Secondary</h4>
            <p>Passed with 85% from CBSE board from Hare Krishna International Senior Secondary School. </p>
            <h4>10th</h4>
            <p>Passed with 9.8 cgpa from CBSE board from GVM Public School. </p>
            </div>
            </div>
        )
    }
}

export default Education;
