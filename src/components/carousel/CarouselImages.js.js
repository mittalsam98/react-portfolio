import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Hello from '../images/Hello.jpg'
import Pencil from '../images/Pencil.jpg'
import laptop1 from '../images/laptop1.jpg'

 class CarouselImages extends Component {
     render(){
    return (
        <div className={classes.carousel_container} id="start">
            <Carousel className={classes.carousel} dynamicHeight infiniteLoop interval={6000} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >
                <div  className={classes.image_container} >
                    <img className={classes.image} src={Hello}  alt="myImage"/>
                    <div  className={classes.h1}>
                       <h1 >I'm Sachin</h1>
                    </div>
                </div>
                <div className={classes.image_container}>
                    <img className={classes.image} src={Pencil} alt="myImage"/>
                    <div  className={classes.h2}> 
                    <h1> I love building</h1>
                    <h1>THINGS!!</h1>
                    </div>
                </div>
                <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div>
            </Carousel>
          
        </div>
     )
    }
}
export default CarouselImages