import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Experience</h2>
                      <div className={classes.paraWithSubheading}>
                        <div className={classes.subHeading}> - Unacademy Group (11/2024 - Present)</div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            Quickly onboarded to ongoing projects, gaining expertise in the
                            company’s tech stack and understanding the product architecture.
                          </div>
                          <div className={classes.description}>
                            Contributed to socket chat feature enhancements and bug fixes, ensuring
                            timely delivery of sprint objectives.
                          </div>
                        </div>
                      </div>
                      <div className={classes.paraWithSubheading}>
                      <div className={classes.subHeading}>- Springworks (7/2021 - 10/2024) </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            Developed multiple core features, improving platform engagement by 20%,
                            using React and server-caching queries.{' '}
                          </div>
                          <div className={classes.description}>
                            Led multiple end-to-end projects (Springverify, SpringverifyDigital,
                            Ex-Emp), with two projects built from the ground up, ensuring timely
                            delivery and adherence to quality standards. Conducted detailed code
                            reviews and provided suggestions for improvements. Integrated AI
                            features to enhance UX.
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Undergraduation at SLIET <span>2017-2021</span>
                      </h2>
                      <div className={classes.description}>
                        I completed my undergraduation in CSE (Computer Science and Engineering)
                        from <a href='http://sliet.ac.in/'>SLIET</a> with overall 82.71%.
                      </div >
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Higher Education <span>2014-2016</span>
                      </h2>
                      <div className={classes.description}>
                        I have completed my higher education from HKIS with major subjects as
                        Physics,Chemistry & Maths with 85% merit in CBSE board.{' '}
                      </div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Internship</h2>
                      <div className={classes.description}>Completed one month Internship in React Js with Internity Foundation</div>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
