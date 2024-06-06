import "../styles/portCard.css";
import Boltstack from '../images/BoltstackSS.png'
import Toto from '../images/totoSS.png'
import Pill from '../images/openfilledPM.svg'
import Github from '../images/github-brands.svg'
import { Card } from "./Card";
import WonderInk from '../images/wonderinkgraphic.png'
import VideoJill from '../images/newjill.png'
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
      <Card imgSrc={Boltstack}
      imgAlt="a screenshot of a Boltstack website talking about AI"
       title="Boltstack"
       info="This is marketing site where I was lead designer and front-end dev. I developed all graphics and worked with our engineers for front-end functionality"
       link= "www.boltstack.com"
       buttonText="Go to site"
       />
       
       <Card imgSrc={Toto}
       title="Friends of Toto"
       info="A vibrant pet socialization platform that allows enthusiasts to connect, share adorable photos, and engage in a lively community. Leveraged technologies such as React, Node.js, GraphQL, MongoDB, and AWS S3 to create a dynamic and user-friendly web application, showcasing proficiency in full-stack web development and cloud services for storage and scalability."
       link="https://friendsoftoto.herokuapp.com/"
       buttonText="Go to site"/>
       
       <Card imgSrc={WonderInk}
       title="WonderInk Case Study"
       info="Adobe XD Case study for Wonder Ink a Learning Management System for youth groups and families "
       link="https://xd.adobe.com/view/b3f471b6-89cd-4b01-aaa8-60b6307dc14d-e6a7/"
       buttonText="Go to site"/>

<Card imgSrc={Pill}
       title="RemiRX Figma"
       info="Figma Mock up for RemiRx app for managing medication using a bluetooth pillbox"
       link="https://www.figma.com/board/HG0IgJzCDkCGT8pyc2MGIZ/Untitled?node-id=0-1&t=j7UsmEy5qFqBadO9-1"
       buttonText="Go to site"/>

<Card imgSrc={VideoJill}


       title="Video tutorial"
       info='"Hey she knows how to do video too!" I created this Video tutorial using Adobe Premier and demonstrated product features'
       link="https://vimeo.com/916271339"
       buttonText="Watch on Vimeo"/>
       





     <a href="https://github.com/ShyFidelity" margin-top="20px"><img width="300px"src={Github} alt="github logo" /></a>
      

      </div>
    
  );
}



