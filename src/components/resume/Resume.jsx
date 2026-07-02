import React, { useState, useEffect, useRef } from "react";
import "./Resume.css";
import CertificationsData from "./Certification";
import { WorkExperienceData } from "./WorkExperience";

const CertificationsCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");
    const total = CertificationsData.length;
    const timeoutRef = useRef(null);

    const goTo = (index, dir) => {
        if (animating) return;

        setDirection(dir);
        setAnimating(true);

        setTimeout(() => {
            setCurrent(index);
            setAnimating(false);
        }, 400);
    };

    const handleNext = () => goTo((current + 1) % total, "next");
    const handlePrev = () => goTo((current - 1 + total) % total, "prev");

    useEffect(() => {
    const timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearTimeout(timer);
}, [current, total]);

    return (
        <div className="cert__carousel">
            <div
                className={`cert__card cert__card--${
                    animating ? direction : "visible"
                }`}
            >
                <img
                    src={CertificationsData[current]}
                    alt={`Certificate ${current + 1}`}
                    className="cert__image"
                />
            </div>

            <div className="cert__controls">
                <button
                    className="cert__btn"
                    onClick={handlePrev}
                    aria-label="Previous"
                >
                    &#8592;
                </button>

                <div className="cert__dots">
                    {CertificationsData.map((_, i) => (
                        <button
                            key={i}
                            className={`cert__dot${
                                i === current ? " cert__dot--active" : ""
                            }`}
                            onClick={() =>
                                goTo(i, i > current ? "next" : "prev")
                            }
                            aria-label={`Go to certificate ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    className="cert__btn"
                    onClick={handleNext}
                    aria-label="Next"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
};

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container">
                {/* Top Tabs */}
                <div className="resume__top-tabs">
                    <button
                        className={`resume__top-btn${
                            tabIndex === 0
                                ? " resume__top-btn--active"
                                : ""
                        }`}
                        onClick={() => setTabIndex(0)}
                    >
                        Experience
                    </button>

                    <button
                        className={`resume__top-btn${
                            tabIndex === 1
                                ? " resume__top-btn--active"
                                : ""
                        }`}
                        onClick={() => setTabIndex(1)}
                    >
                        Certifications
                    </button>
                </div>

                {/* Experience Panel */}
                <div
                    className={`resume__panel${
                        tabIndex === 0 ? " resume__panel--active" : ""
                    }`}
                >
                    {WorkExperienceData.map((exp) => (
                        <div className="tab__panel is-active" key={exp.id}>
                            <h2 className="tab__panel-title">
                                {exp.title} @ {exp.company}
                            </h2>

                            <p className="tab__panel-subtitle">
                                {exp.yearsActive}
                            </p>

                            <ul className="tab__panel-list">
                                {exp.information.map((info, i) => (
                                    <li key={i}>{info}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Certifications Panel */}
                <div
                    className={`resume__panel${
                        tabIndex === 1 ? " resume__panel--active" : ""
                    }`}
                >
                    <CertificationsCarousel />
                </div>
            </div>
        </section>
    );
};

export default Resume;