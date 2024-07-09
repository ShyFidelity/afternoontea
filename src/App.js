import "./App.css";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Howdy from "./components/Howdy";
import Design from "./components/Design"

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const StaticMenu = () => {
  const contactSection = useScrollSection("contact");
  const workSection = useScrollSection('work');
  const aboutSection = useScrollSection('about');


  return (
    <ul className="Nav">
   
      <li >
      <p><a href="work">Work</a></p> 
      </li>
      <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
        About
      </li>
    
      <li onClick={contactSection.onClick} selected={contactSection.selected}>
        Contact
      </li>
  
    </ul>
  );
};

function App() {
  return (
    <div className="App">
     
      <ScrollingProvider>

        <StaticMenu />

        <Section id="Howdy">
          <Howdy />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="design">
          {" "}
          <Design />
        </Section>
        <Section id="work">
       <div > <Work /></div>  
        </Section>
        <Section id="contact">
          {" "}
          <Contact />{" "}
        </Section>
        <Section id="resume">
          {" "}
          <Resume />{" "}
        </Section>
       
      </ScrollingProvider>
    </div>
  );
}

export default App;
