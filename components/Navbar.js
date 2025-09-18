"use client";
import React, { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../public/assets/logo.png";
import { Link } from "react-scroll";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);


  // Toggle the mobile menu
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Close the mobile menu
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div 
        className="navbar" 
        data-aos="fade-down" 
      >
        <div className="navbar-left">
          <div className="nav-btn">
            <Image className="logo" src="/assets/logo.png" alt="logo" width={100} height={80} />
          </div>
        </div>
        <div className="icon-font" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            size="lg"
            style={{ color: "#ffffff", cursor: "pointer" }}
          />
        </div>

        <div className={`navbar-right ${isOpen ? "active" : ""}`}>
        <Link
            activeClass="active"
            to="project-heading"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            <div className="nav-btn"> Projects</div>
          </Link>
          <Link
            activeClass="active"
            to="aboutme-main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            <div className="nav-btn"> About </div>{" "}
          </Link>
       
          <a
            href="https://drive.google.com/file/d/1ox53eZTCxjyf_WVBv-FMS6RQjsBGrijs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="nav-btn"> Resume</div>{" "}
          </a>
          <Link
            activeClass="active"
            to="contact-form"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            <div className="nav-btn">Contact me</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
