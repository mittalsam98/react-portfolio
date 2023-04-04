import React from 'react';
import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import shopping from '../images/shopping-app.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://bookheap-app.netlify.app/',
    title: 'Online Book Store',
    techStack: 'Tech Stack: MERN Stack',
    desc: 'It is a book selling web app built in a MERN stack . You can sell books by uploading images and can also see what others are selling.',
    image: bookheap
  },
  {
    link: 'https://chess-web-online.netlify.app/',
    title: 'Realtime Online Chess',
    techStack: 'Tech Stack- ReactJs, NodeJS, Express, Socket.io.',
    desc: 'Play real time chess with your friends online by sharing a link.',
    image: chess
  },
  {
    link: 'https://travel-log-frontend-two.vercel.app/',
    title: 'Travel Log',
    techStack: 'Tech Stack- MERN Stack, Mapbox',
    desc: 'A full stack application to store / list places you have visited. You can log every visit on map.',
    image: travel
  },
  {
    link: 'https://shopnowhere.netlify.app/',
    title: 'Shopping-Store',
    techStack: 'Tech Stack- React, Redux, Formik',
    desc: 'Shopping store built with React and Redux',
    image: shopping
  },
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.your_dictionary',
    title: 'Definition Finder',
    techStack: 'Tech Stack: Flutter',
    desc: 'Definition Finder is absolutely free online dictionary with every word you look up. Millions of definitions from the most trusted source.',
    image: definition
  },
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.superheroes',
    title: 'My Superhero',
    techStack: 'Tech Stack- Flutter',
    desc: 'My SuperHero app provides all SuperHeroes and Villians data like powerstats, full name from all the universes.',
    image: superhero
  },
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.memestemplate',
    title: 'Indian Memes Templates',
    techStack: 'Tech Stack- Flutter',
    desc: ' Indian meme templates - Memeशाला contains a wide range of Indian meme templates including Bollywood, political, Indian shows. You can edit and create memes too.',
    image: memes
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
}
