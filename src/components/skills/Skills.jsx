import React from "react";
import "./Skills.css";

import { SiHuggingface } from "react-icons/si";
import { BsRobot, BsDatabaseGear } from "react-icons/bs";

const skillsData = [
    // Languages
    { id: 1, type: "devicon", icon: "devicon-java-plain colored", name: "Java" },
    { id: 2, type: "devicon", icon: "devicon-python-plain colored", name: "Python" },
    { id: 3, type: "devicon", icon: "devicon-javascript-plain colored", name: "JavaScript" },

    // Frameworks
    { id: 4, type: "devicon", icon: "devicon-spring-plain colored", name: "Spring Boot" },
    { id: 5, type: "devicon", icon: "devicon-react-original colored", name: "React" },

    // AI
    {
        id: 6,
        type: "reacticon",
        icon: <BsRobot color="#8B5CF6" size={42} />,
        name: "Generative AI",
    },
    {
        id: 7,
        type: "reacticon",
        icon: <BsRobot color="#10B981" size={42} />,
        name: "LangChain",
    },
    {
        id: 7,
        type: "reacticon",
        icon: <BsRobot color="#39bee3" size={42} />,
        name: "LangGraph",
    },
    {
        id: 8,
        type: "reacticon",
        icon: <BsDatabaseGear color="#2563EB" size={42} />,
        name: "RAG",
    },
    {
        id: 9,
        type: "reacticon",
        icon: <SiHuggingface color="#FFD21E" size={42} />,
        name: "Hugging Face",
    },

    // Databases
    { id: 10, type: "devicon", icon: "devicon-mysql-plain colored", name: "MySQL" },
    { id: 11, type: "devicon", icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
    { id: 12, type: "devicon", icon: "devicon-mysql-plain colored", name: "DBMS" },

    // Frontend
    { id: 13, type: "devicon", icon: "devicon-html5-plain colored", name: "HTML5" },
    { id: 14, type: "devicon", icon: "devicon-css3-plain colored", name: "CSS3" },
    { id: 15, type: "devicon", icon: "devicon-bootstrap-plain colored", name: "Bootstrap" },

    // Tools
    { id: 16, type: "devicon", icon: "devicon-git-plain colored", name: "Git" },
    { id: 17, type: "devicon", icon: "devicon-amazonwebservices-plain-wordmark colored", name: "AWS" },

    // CS Fundamentals
    { id: 18, type: "devicon", icon: "devicon-java-plain colored", name: "DSA & Problem Solving" },
];

const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Technical Arsenal</h2>

            <div className="skills__container grid">
                {skillsData.map(({ id, type, icon, name }) => (
                    <div className="skills__card" key={id}>
                        <div className="skills__icon-wrapper">
                            {type === "devicon" ? (
                                <i className={icon}></i>
                            ) : (
                                icon
                            )}
                        </div>

                        <span className="skills__name">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;