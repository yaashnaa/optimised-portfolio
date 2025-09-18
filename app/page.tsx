import "./globals.css";
import "../styles/AppMobile.css"
import ContactForm from "../components/ContactMe";
import MiniAboutMe from "../components/MiniAboutMe";
import Navbar from "../components/Navbar";
import NewHeroBanner from "../components/NewHeroBanner";
import Projects from "../components/Projects";
import AnimatedCursor from "react-animated-cursor";


function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={20}
        outerSize={55}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        trailingSpeed={5}
        innerStyle={{
          backgroundColor: "var(--accent)",
        }}
        outerStyle={{
          mixBlendMode: 'exclusion',
          border: "3px solid var(--accent)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            innerSize: 10,
            outerSize: 20,
            color: "255, 255, 255",
            outerAlpha: 0.3,
            innerScale: 0.5,
            outerScale: 5,
          },
        ]}
      />
      <Navbar />
      <NewHeroBanner />
      <Projects />
      <MiniAboutMe />
      <ContactForm />
    </div>
  );
}

export default App;
