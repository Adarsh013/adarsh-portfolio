import React from 'react';
import './Skills.css';

const skillsData = [
    { id: 1, devicon: 'devicon-java-plain colored', name: 'Java' },
    { id: 2, devicon: 'devicon-python-plain colored', name: 'Python' },
    { id: 3, devicon: 'devicon-mysql-plain colored', name: 'MySQL' },
    { id: 4, devicon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
    { id: 5, devicon: 'devicon-amazonwebservices-plain-wordmark colored', name: 'AWS' },
    { id: 6, devicon: 'devicon-html5-plain colored', name: 'HTML5' },
    { id: 7, devicon: 'devicon-css3-plain colored', name: 'CSS3' },
    { id: 8, devicon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
    { id: 9, devicon: 'devicon-javascript-plain colored', name: 'JavaScript' },
    { id: 10, devicon: 'devicon-react-original colored', name: 'React' },
    { id: 11, devicon: 'devicon-spring-plain colored', name: 'Spring Boot' },
    { id: 12, devicon: 'devicon-mysql-plain colored', name: 'DBMS' },
    { id: 13, devicon: 'devicon-git-plain colored', name: 'DSA & Problem Solving' },
];

const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Technical Arsenal</h2>

            <div className="skills__container grid">
                {skillsData.map(({ id, devicon, name }) => (
                    <div className="skills__card" key={id}>
                        <div className="skills__icon-wrapper">
                            <i className={devicon}></i>
                        </div>
                        <span className="skills__name">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;