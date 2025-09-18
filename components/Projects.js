"use client";
import React, { useEffect, useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
const ProjectCard = React.memo(function ProjectCard({ project, isWeb }) {
  return (
    <div
      className={isWeb ? "web-project" : "creative-project"}
      data-aos={project.aos}
      data-aos-once="true"
    >
      {isWeb ? (
        <>
          <div className="project-content">
            <div className="tech" id="tech">
              {project.tech.map((tech, index) => (
                <div key={index} className="button-21">
                  {tech}
                </div>
              ))}
            </div>
            {project.mobileImage && (
              <div className="project-img-mobile">
                <Image
                  src={project.mobileImage}
                  alt={project.title}
                  layout="responsive"
                  width={300}
                  height={200}
                />
                <div className="image-hover">
                  <div className="links-1">
                    {project.hoverLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        style={{ color: "white", textDecoration: "underline" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="project-heading-inside">{project.title}</div>
            <div className="project-desc">{project.description}</div>
          </div>
          <div className="project-img" id="project-img">
            <Image
              src={project.desktopImage}
              alt={project.title}
              layout="responsive"
              width={600}
              height={400}
            />
            <div className="image-hover">
              <div className="links-1">
                {project.hoverLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    style={{ color: "white", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="project-img">
            <Image
              src={project.desktopImage}
              alt={project.title}
              layout="responsive"
              width={600}
              height={400}
            />
            <div className="image-hover">
              <div className="links-1">
                {project.hoverLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    style={{ color: "white", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="project-content">
            <div className="project-heading-inside">{project.title}</div>
            <div className="project-desc">{project.description}</div>
          </div>
        </>
      )}
    </div>
  );
});
ProjectCard.displayName = "ProjectCard";

function Projects() {
  const [currentSection, setCurrentSection] = useState("webdev");

  const handleNextSection = () => {
    setCurrentSection((prev) => (prev === "webdev" ? "creative" : "webdev"));
  };

  const handlePreviousSection = () => {
    setCurrentSection((prev) => (prev === "creative" ? "webdev" : "creative"));
  };

  useEffect(() => {
    AOS.init();
  }, []);

  // Memoize the project data so it’s computed only once.
  const webProjects = useMemo(
    () => [
      {
        id: 1,
        aos: "fade-left",
        title: "ZenPose (HACKNYU 2025 Winner)",
        tech: ["Node.js", "React", "Python", "Axios", "TensorFlow"],
        mobileImage: "/assets/zenPose.png",
        desktopImage: "/assets/zenPose.png",
        hoverLinks: [
          {
            text: "Github repository",
            url: "https://github.com/yaashnaa/hackathon-2025",
          },
        ],
        description:
          "Developed a web app that uses real-time pose detection to provide instant feedback for injury prevention. Improved detection accuracy by implementing relative pose estimation and integrated Gemini API for personalized corrections. Built a responsive UI with React enhancing user experience and engagement.",
      },
      {
        id: 9,
        aos: "fade-left",
        title: "Vira (Launching soon!)",
        tech: ["React Native", "Firebase", "Expo", "Styled Components", "Jest"],
        mobileImage: "/assets/vira.png",
        desktopImage: "/assets/vira.png",
        hoverLinks: [
          {
            text: "Github repository",
            url: "https://github.com/yaashnaa/Vira/tree/main",
          },
        ],

        description:
          "Vira is a gentle, research-backed wellness app designed for users navigating depression, anxiety, and eating disorder recovery. Unlike traditional wellness apps that rely on rigid tracking, Vira prioritizes emotional safety, autonomy, and self-compassion. Built using behavioral psychology and ethical UX design principles, Vira adapts to the user—not the other way around. Public beta launches on TestFlight June 5.",
      },
      {
        id: 7,
        aos: "fade-left",
        title: "Respiro",
        tech: ["EJS", "Express", "ML5.js", "Handpose", "Facemesh", "P5.js"],
        mobileImage: "/assets/respiro.png",
        desktopImage: "/assets/respiro.png",
        hoverLinks: [
          {
            text: "Go to website",
            url: "https://yaashnaa.github.io/Respiro/",
          },
          {
            text: "Github repository",
            url: "https://github.com/yaashnaa/Respiro.git",
          },
        ],
        description:
          "Respiro is an innovative tool designed to promote relaxation and mindfulness through interactive features. With calming visuals, breathing exercises, and positive affirmations, it provides a seamless meditation experience. The platform includes mandala visualizations that adapt to facial expressions using ml5.js and a dynamic box breathing guide built with p5.js, featuring customizable timers. A candle breathing animation reacts to the user’s exhale, leveraging audio detection and microphone input. Users can practice self-affirmations with speech-to-text and text-to-speech features powered by the p5.speech library.",
      },
      {
        id: 2,
        aos: "fade-right",
        title: "FlexFit",
        tech: ["React", "Firebase", "Rapid API", "Axios", "MUI"],
        mobileImage: "/assets/flexfit.png",
        desktopImage: "/assets/flexfit.png",
        hoverLinks: [
          {
            text: "Go to website",
            url: "https://auth-fitness-website-react.web.app/",
          },
          {
            text: "Github repository",
            url: "https://github.com/yaashnaa/FlexFit.git",
          },
        ],
        description:
          "A cutting-edge fitness platform crafted with React, providing a seamless and responsive user interface. Harnessing the power of three APIs, our website dynamically integrates exercise, meal, and recipe data to offer a comprehensive wellness journey. Authentication and hosting are flawlessly managed through Firebase, ensuring a secure and reliable user experience.",
      },
      {
        id: 3,
        aos: "fade-left",
        title: "StudyCenter",
        tech: ["Express", "EJS", "Node.js", "WebRTC", "Peer.js"],
        mobileImage: "/assets/studyHub.png",
        desktopImage: "/assets/studyHub.png",
        hoverLinks: [
          {
            text: "Go to website",
            url: "https://adaptive-carnelian-lobe.glitch.me/",
          },
          {
            text: "Github repository",
            url: "https://github.com/yaashnaa/StudyCenter.git",
          },
        ],
        description:
          "A dynamic platform that facilitates collaborative studying, harnessing the power of timers for enhanced productivity. Integrated with the Spotify API, it allows you to enjoy your favorite music while studying. Engage in public study rooms, create your own, or opt for a solo study session. Personalize your environment by choosing the background that enhances your focus. Additionally, the platform includes a calendar and a to-do list for better organization and planning.",
      },
      {
        id: 4,
        aos: "fade-right",
        title: "BlogHub",
        tech: ["Express", "EJS", "Bcrypt", "Passport.js", "MongoDB", "Node.js"],
        mobileImage: "/assets/bloghub.png",
        desktopImage: "/assets/bloghub.png",
        hoverLinks: [
          {
            text: "Go to website",
            url: "/",
          },
          {
            text: "Github repository",
            url: "https://github.com/yaashnaa/Bloghub.git",
          },
        ],
        description:
          "A vibrant blogging platform designed for users to publish and explore a diverse range of blogs. The website harnesses the power of MongoDB for secure storage of user data and blogs, ensuring a seamless and reliable experience. With Passport.js, authentication is made simple, providing a trusted environment for users. The platform is built on Express and EJS for efficient templating, offering a user-friendly interface for both writers and readers.",
      },
      {
        id: 5,
        aos: "fade-left",
        title: "MusicConnect",
        tech: [
          "React",
          "Express",
          "Socket.io",
          "WebRTC",
          "SimplePeer",
          "CodeMirror",
        ],
        mobileImage: "/assets/musicChat.png",
        desktopImage: "/assets/musicChat.png",
        hoverLinks: [
          {
            text: "Go to website",
            url: "https://sixth-field-fascinator.glitch.me/",
          },
          {
            text: "Github repository",
            url: "https://github.com/yaashnaa/MusicConnect.git",
          },
        ],
        description:
          "Experience the unique blend of communication and music sharing on MusicConnect, powered by socket.io. Engage in real-time chat and collaborative music playback with fellow users. The platform features two distinctive modes: 'Listening' and 'Playing,' empowering you to both enjoy and share music seamlessly. Join dynamic rooms to connect with like-minded users. With the added support of Express and EJS, MusicConnect ensures a smooth and enjoyable user experience.",
      },
      {
        id: 6,
        aos: "fade-right",
        title: "DigiDraw",
        tech: ["Express", "Socket.io", "WebRTC", "EJS", "Morgan", "Node.js"],
        mobileImage: "/assets/drawingapp.png",
        desktopImage: "/assets/drawingapp.png",
        hoverLinks: [
          {
            text: "Go to website",
            url: "https://digi-draw-live.glitch.me/",
          },
          {
            text: "Github repository",
            url: "https://github.com/yaashnaa/DigiDraw.git",
          },
        ],
        description:
          "DigiDraw is your canvas for real-time collaboration, allowing users to draw and create together seamlessly. With a spectrum of colors and diverse background options, you can express your creativity in a shared space. The platform goes beyond drawing, enabling screen sharing with recording capabilities and the option to download snapshots of your collaborative artwork. Experience the unique feature of projecting your webcam directly onto the canvas, adding a personal touch to your collaborative sessions.",
      },

      {
        id: 8,
        aos: "fade-right",
        title: "StudyFlow",
        tech: ["React", "API", "Axios", "Node.js"],
        mobileImage: "/assets/study-timer.png",
        desktopImage: "/assets/study-timer.png",
        hoverLinks: [
          {
            text: "Go to website",
            url: "https://study-flow-33bff.web.app/",
          },
        ],
        description:
          "StudyFlow is a React-based tool designed to streamline your work process. Users can optimize their productivity with a variety of timers tailored to their needs. StudyFlow seamlessly integrates with the YouTube API, offering a curated selection of background music to enhance the study experience. Elevate your workflow with this versatile and user-friendly study companion.",
      },
    ],
    []
  );

  const creativeProjects = useMemo(
    () => [
      {
        id: 1,
        aos: "fade-right",
        title: "3D Printed Moon Lamp",
        desktopImage: "/assets/moonlamp.png",
        mobileImage: "/assets/moonlamp.png",
        hoverLinks: [
          {
            text: "Go to documentation",
            url: "https://docs.google.com/document/d/1dKotCAPhdJb-Hb3oFyErQZe2LNPbyDZSzRdlkAOgW5w/edit?usp=sharing",
          },
        ],
        description:
          "This moon lamp is 3D-printed with a design carefully crafted in Fusion 360 for precision. It features an internal LED lighting system that creates a magical glow. With a remote control, users can easily change colors, setting the perfect ambiance.",
      },
      {
        id: 2,
        aos: "fade-right",
        title: "Interactive Motion Performance",
        desktopImage: "/assets/performance.png",
        mobileImage: "/assets/performance.png",
        hoverLinks: [
          {
            text: "Go to documentation",
            url: "https://drive.google.com/drive/folders/1vtF-D3IE8SWd9t0jLkbh7IBlBT2qnbTQ?usp=sharing",
          },
        ],
        description:
          "Designed and executed a live performance integrating wearable technology and interactive visuals. Used Arduino to interface with TouchDesigner, generating real-time visuals from accelerometer and gyroscope data. This project showcased expertise in wearable tech, real-time visual programming, and creative coding, seamlessly blending hardware and software for an immersive experience.",
      },
      {
        id: 3,
        aos: "fade-right",
        title: "Submarine Adventure Game",
        desktopImage: "/assets/game.png",
        mobileImage: "/assets/game.png",
        hoverLinks: [
          {
            text: "Go to website",
            url: "https://yaashnaa.github.io/Submarine-Adventure/",
          },
        ],
        description:
          "Submarine Adventure is an engaging underwater exploration game built with p5.js. Players control a submarine using arrow keys to navigate the ocean depths, collecting coins to increase their score while avoiding sharks and obstacles that can end the game. Each level presents a greater challenge, requiring more coins to progress. A dynamic progress bar keeps players informed of their advancement toward completing each level, adding excitement and motivation to the adventure.",
      },
    ],
    []
  );

  return (
    <>
      <div
        className="project-heading"
        id="project-heading"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="project-header">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow-icon"
            onClick={handlePreviousSection}
          />
          <svg viewBox="0 0 1320 300" width="100%" height="100%">
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              fill="white"
              fontSize="120"
              fontFamily="Alegreya SC"
              // style={{
              //   textShadow:
              //     "0 0 0px #1ccbd4, 0 0 10px #1ccbd4, 0 0 0px #1ccbd4",
              // }}
            >
              {currentSection === "webdev"
                ? "Web Dev Projects"
                : "Creative Projects"}
            </text>
          </svg>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow-icon"
            onClick={handleNextSection}
          />
        </div>
      </div>
      {currentSection === "webdev" && (
        <div className="projects-web" key="webdev">
          {webProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isWeb={true} />
          ))}
        </div>
      )}
      {currentSection === "creative" && (
        <div className="creative-flex" key="creative">
          {creativeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isWeb={false} />
          ))}
        </div>
      )}
    </>
  );
}

export default Projects;
