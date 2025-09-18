"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

import "aos/dist/aos.css";
import "animate.css";
import Image from "next/image";
const NewHeroBanner = () => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [shouldRotateOut, setShouldRotateOut] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const h1Ref = useRef(null);

  // Update the text shadow based on mouse position over the heading.
  const handleMouseMove = useCallback((e) => {
    if (h1Ref.current) {
      const rect = h1Ref.current.getBoundingClientRect();
      const rXP = e.clientX - (rect.left + rect.width / 2);
      const rYP = e.clientY - (rect.top + rect.height / 2);
      h1Ref.current.style.textShadow = `
        ${rYP / 10}px ${rXP / 80}px rgba(217, 164, 161, 0.8),
        ${rYP / 8}px ${rXP / 60}px rgba(251, 213, 213, 0.8),
        ${rXP / 70}px ${rYP / 12}px rgba(28, 203, 212, 0.5)
      `;
    }
  }, []);
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });
    import("aos/dist/aos.css");
    import("animate.css");
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setIsScrollingUp(scrollPosition > 100);
          setShouldFadeOut(scrollPosition > 100);
          setShouldRotateOut(scrollPosition > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="main-div">
        <div
          className="div-1"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
        >
          {" "}
          <div className="main">
            <div className="main-heading">
              <div>
                <div className="main-heading-title" data-aos="zoom-in-right">
                  Hi, I&#39;m Yaashna!
                </div>
                <h1 ata-aos="zoom-in-right">
                  I&#39;m Web developer and designer passionate about creating polished,
                  user-centered websites and applications.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className={`img-div`}>
          <Image src="/assets/new.png" loading="lazy" data-aos="fade-left" alt="Banner" width={600} height={400} style={{ zIndex: -1000 }} />
          <div className="background-div"> </div>
        </div>

        <div className="div-2"></div>
      </div>
    </>
  );
};

export default NewHeroBanner;
