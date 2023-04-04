import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello.jpg';
import Pencil from '../images/Pencil.jpg';

class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id='start'>
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src={Hello} alt='myImage' />
            <div className={classes.h1}>
              <h1>I'm Sachin</h1>
              <a
                href='https://drive.google.com/file/d/1XwQYRl06QtuNPT8v4fHkbajk1ll9LTbi/view?usp=sharing'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src={Pencil} alt='myImage' />
            <div className={classes.h2}>
              <h1> I love building</h1>
              <h1>THINGS!!</h1>
              <a
                href='https://github.com/mittalsam98?tab=repositories&q=&type=&language=javascript&sort=stargazers'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW REACT PROJECTS <GoProject />
              </a>
              <div className={classes.secondButton}>
                <a
                  href='https://github.com/mittalsam98?tab=repositories&q=&type=&language=dart&sort='
                  rel='opener noreferrer'
                  target='_blank'
                >
                  VIEW ANDROID PROJECTS <GoProject />
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;
