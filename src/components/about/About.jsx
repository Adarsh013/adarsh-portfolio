import React from 'react';
import './About.css';
import Image from '../../assets/myAvatar2.png';
import Resume from '../../assets/Adarsh_Gupta_Resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
Hello World! I'm Adarsh Gupta 👋
<br></br>
<br></br>
I'm a final-year MCA student at Birla Institute of Technology (BIT), Mesra, 
passionate about building scalable and user-friendly web applications.

My primary tech stack includes <b>React, Spring Boot, Java, JavaScript, MySQL, PostgreSQL,</b> and  <b> REST APIs.</b>
<br></br><br></br>
 I also enjoy exploring AI-powered applications, cloud technologies, and modern backend development.

I love solving real-world problems through code, learning new technologies, 
and collaborating with others to create impactful solutions. I'm currently seeking opportunities 
where I can grow as a Software Developer and contribute to meaningful projects.
                        </p>
                        {/* <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Postgres SQL</li>
                            <li>NestJS</li>
                        </ul> */}
                        <button className="btn" onClick={downloadResume}>Resume</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About