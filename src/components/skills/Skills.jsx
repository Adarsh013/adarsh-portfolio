// import React from 'react';
// import './Skills.css';

// import {
//     SiJavascript, SiHtml5, SiCss, SiBootstrap, SiReact, SiSpringboot,
//     SiMysql, SiPostgresql, SiPowers,
// } from 'react-icons/si';
// import { FaJava, FaPython, FaDatabase, FaProjectDiagram, FaAws } from 'react-icons/fa';

// const skillsData = [
//     { id: 1, icon: <FaJava />, name: 'Java', color: '#f89820' },
//     { id: 2, icon: <FaPython />, name: 'Python', color: '#3776AB' },
//     { id: 3, icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
//     { id: 4, icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
//     { id: 5, icon: <SiPowers />, name: 'Power BI', color: '#F2C811' },
//     { id: 6, icon: <SiPowers />, name: 'DAX', color: '#F2C811' },
//     { id: 7, icon: <SiPowers />, name: 'Power Query', color: '#F2C811' },
//     { id: 8, icon: <FaAws />, name: 'AWS', color: '#FF9900' },
//     { id: 9, icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
//     { id: 10, icon: <SiCss />, name: 'CSS3', color: '#1572B6' },
//     { id: 11, icon: <SiBootstrap />, name: 'Bootstrap', color: '#7952B3' },
//     { id: 12, icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
//     { id: 13, icon: <SiReact />, name: 'React', color: '#61DAFB' },
//     { id: 14, icon: <SiSpringboot />, name: 'Spring Boot', color: '#6DB33F' },
//     { id: 15, icon: <FaDatabase />, name: 'DBMS', color: '#00ADD8' },
//     { id: 16, icon: <FaProjectDiagram />, name: 'DSA', color: '#FF6F61' },
// ];

// const Skills = () => {
//     return (
//         <section className="skills container section" id="skills">
//             <h2 className="section__title">Technical Arsenal</h2>

//             <div className="skills__container grid">
//                 {skillsData.map(({ id, icon, name, color }) => (
//                     <div className="skills__card" key={id}>
//                         <div
//                             className="skills__icon-wrapper"
//                             style={{ '--icon-color': color }}
//                         >
//                             {icon}
//                         </div>
//                         <span className="skills__name">{name}</span>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Skills;


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