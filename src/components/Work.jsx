import "../styles/portCard.css";
import Boltstack from '../images/BoltstackSS.png'
import Toto from '../images/totoSS.png'
import Pill from '../images/openfilledPM.svg'
import Github from '../images/github-brands.svg'
import { Card } from "./Card";
import WonderInk from '../images/wonderinkgraphic.png'
import VideoJill from '../images/newjill.png'
import Prayer from '../images/mainToday.png'
import Edqualis from '../images/edqualisss.png'
import EdqualisCS from '../images/ednewnew.png'
import AnsweredNew from '../images/answerednew.png'
import Unicorn from '../images/Unico Rn copy.png'
import AItutor from '../images/Screen Shot 2024-07-15 at 7.51.34 PM.png'
import Legacy from '../images/legacyss.png'

const boxStyle = {
  height: "600px",
  width: "100vw",
  padding: "300px",
  margin: 0,
  
};

const mediastyle = {
  height: "150px", 
  width: "150px"
}

// const projects = [
//   {
//     title: "Ivy Nails",
//     img: Ivy,
//     alt: "screenshot of ivy nails website",
//     description: "First freelance project for local salon",
//     link: "https://shyfidelity.github.io/ivy/",
//     github: "https://github.com/ShyFidelity/ivy",
//     id: 1,
//   },
//   {
//     title: "Friends of Toto",
//     img: Toto, 
//     alt: "screenshot of ivy toto website",
//     description: "Pet Social media Full MERN stack app",
//     link: "https://shyfidelity.github.io/ivy/",
//     github: "https://github.com/ShyFidelity/ivy",
//     id: 1,
//   },

//   {
//     title: "Ouroboros",
//     img: Snake,
//     alt: "snake colorful graphic",
//     description: "mental health app",
//     link: "https://ouroboros-ml-jf-ni.herokuapp.com/",
//     github: "https://github.com/ShyFidelity/Ouroboros",
//     id: 2,
//   },



// ];

export default function Work() {
  return (
    <div >
             <Card imgSrc={Legacy}
      imgAlt="lawyer app"
       title="Legacy Architects"
       info="Recent collaborative Figma project for estate planning lawyers. Password is shyfidelity."   
       link= "https://www.figma.com/design/ZulEUpRGw8VCuAIIwSchlI/Lawyer-side-of-Legacy-Architects?node-id=2-282&t=m3vfyViyT4aNMUUV-1"
       buttonText="Go to Figma project"
       />
          <Card imgSrc={AItutor}
      imgAlt="a cute pictuer of a computer talking about AI"
       title="AI Tutor"
       info="Here are Figma screens and a live link of an AI tutor site, my latest project using chat gpt. I created all the designs, brand aesthetic, and the working front end build. The live link is available in the Figma file. Enjoy!"
    
       link= "https://www.figma.com/design/IFub1w2Bx04gq61DbCnyt5/AI-TUTOR?node-id=37-3088&t=aIfRkgyvpJaP4cUd-1"
       buttonText="Go to Figma project"
       />

      <Card imgSrc={Boltstack}
      imgAlt="a screenshot of a Boltstack website talking about AI"
       title="Boltstack"
       info="Discover Boltstack.com, where I led marketing efforts and front-end development. I created everything on this site from graphics to functionality and CSS media queries for a mobile-friendly design. Built on internal low-code software."
    
       link= "https://boltstack-dev.softwarebbd.com/"
       buttonText="Go to site"
       />
       
       <Card imgSrc={Edqualis}
      imgAlt="a screenshot of a Boltstack website talking about AI"
       title="Edqualis"
       info="Edqualis is an expansive education platform that engages admins, teachers, and students in one place. With the ability to generate content, forms, custom Dashboards, classes, lessons, rubrics, and custom branded UI.
       Reskinned the entire application to give a more modern look."
      link= "https://esp-dev.softwarebbd.com/?rr_dev=true&"
       buttonText="Log in available upon request"
       />

<Card imgSrc={EdqualisCS}
      imgAlt="a screenshot of a Boltstack website talking about AI"
       title="Edqualis Case Study"
       info="A deeper look at Edqualis, it's new style, and it's users needs. We take an in-depth look at the life of the user, their needs and frustrations pertaining to this software."
       link= "https://www.figma.com/design/LYvcCqLYk36RPN5SPsIYQW/Behance-Presentation-Template-UI%2FUX-Case-study-(Community)?node-id=1-2&t=xvOpbyMZrpxANsVm-1"
       buttonText="View Figma project"
       />
       
       {<Card imgSrc={WonderInk}
       title="WonderInk Application"
       info="WonderInk is a learning management system for leaders, parents, and students. I revamped the front-end interface to align with brand recognition, taking the lead in design decisions. Additionally, I developed the parent portal as a vital link between parents, students, and youth leaders, fostering continuous engagement in learning."
       link="https://app.wonderink.org/?"
       buttonText="Log in available upon request"/>

/*<Card imgSrc={AnsweredNew}
       title="Answered"
       info="Adobe XD mock up of an app that connects religious groups to form community lead prayers across multiple platforms and locations."
       link="https://xd.adobe.com/view/fa61ba9a-951f-4191-ac83-316fc359dd9d-af32/" 
       buttonText="Go to Adobe XD Case Study"/> */}

<Card imgSrc={Pill}
       title="RemiRX Figjam"
       info="Review the Figma mockup presenting RemiRx, an app designed for managing medication using a Bluetooth pillbox. Explore its user-friendly interface and innovative features tailored to streamline healthcare management."
       link="https://www.figma.com/board/HG0IgJzCDkCGT8pyc2MGIZ/Untitled?node-id=0-1&t=j7UsmEy5qFqBadO9-1"
       buttonText="Go to Figjam project"/>
  

<Card imgSrc={VideoJill}


       title="Video tutorial"
       info='"Hey she knows how to do video too!" I created this Video tutorial using Adobe Premier and demonstrated product features'
       link="https://vimeo.com/916271339"
       buttonText="Watch on Vimeo"/>
       
       <div id="design" className="oneHundred"> <p className="totoSays">Projects</p></div>           
       <Card imgSrc={Unicorn}
       title="Wildling Wine"
       info="Figma Course side project"
       link="https://www.figma.com/design/8hRULjo8LQtr52zv2Sfxxb/Jillian-Wine-Ecom-V1?node-id=30-3&t=RySMoqovo5t5LT86-1"
       buttonText="Go to Figma"/>

       <Card imgSrc={Toto}
       title="Friends of Toto"
       info="A vibrant pet socialization platform that allows enthusiasts to connect, share adorable photos, and engage in a lively community. Leveraged technologies such as React, Node.js, GraphQL, MongoDB, and AWS S3 to create a dynamic and user-friendly web application, showcasing proficiency in full-stack web development and cloud services for storage and scalability."
       link="https://friendsoftoto.herokuapp.com/"
       buttonText="Go to site"/>



     

     
      

      </div>
    
  );
}



