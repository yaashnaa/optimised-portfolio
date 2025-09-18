"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "../public/assets/aboutme.jpg";

// React Icons replacements
import {
  FaEnvelope,
  FaLocationDot,
  FaBuildingColumns,
  FaFile,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

import styles from "../styles/aboutme.module.css";

const MiniAboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="aboutme-main"
      // data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="card">
        <Image
          src="assets/aboutme.jpg"
          className="circular-img"
          loading="lazy"
          alt="About me"
          width={100}
          height={100}
        />
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </div>

      <div className="aboutme-content">
        <div className="container projects">
          <h2>So, who am I really?</h2>
          <div className="overlay"></div>
        </div>
        <div className="about-me">
          I’m a web developer and designer with a deep love for creating —
          whether it&apos;s writing code, designing interfaces, or building
          experiences that merge art and technology. My background in creative
          disciplines fuels the way I approach web development: with curiosity,
          experimentation, and a drive to make things that are both functional
          and expressive. This portfolio is more than a showcase — it&apos;s a
          reflection of the journey I’ve taken to blend aesthetics and logic,
          and my passion for crafting meaningful digital work.
        </div>
        <div className="aboutme-icons">
          <div className="icon-info">
            <FaEnvelope className="icon-am" size="1.5rem" />{" "}
            yaashna.gupta@nyu.edu
          </div>
          <div className="icon-info">
            <FaBuildingColumns className="icon-am" size="1.5rem" /> New York
            University
          </div>
          <div className="icon-info">
            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/yaashna-gupta-a78473237"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size="2.2rem" color="#ffffff" />
              </a>
              <a
                href="https://github.com/yg2348"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size="2.2rem" color="#ffffff" />
              </a>
              <a
                href="https://drive.google.com/file/d/19fdjmJTiLdouylxjFgCNV1AmufeNcoRf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFile size="2.2rem" color="#ffffff" />
              </a>
              <a
                href="https://www.instagram.com/_.yaashna._/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size="2.2rem" color="#ffffff" />
              </a>
            </div>
          </div>
          <div className="icon-info">
            <FaLocationDot className="icon-am" size="1.5rem" /> New York
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniAboutMe;
