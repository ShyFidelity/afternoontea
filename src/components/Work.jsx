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
       info="Discover Boltstack.com, where I led marketing efforts and front-end development. From graphics to functionality and mobile-friendly design, I crafted it all with precision and passion. Working closely with an engineering team, I ensured all User Auth functionality."
       link= "https://esp-dev.softwarebbd.com/?rr_dev=true&"
       buttonText="Go to site"
       />
       
       <Card imgSrc={Edqualis}
      imgAlt="a screenshot of a Boltstack website talking about AI"
       title="Edqualis"
       info="Edqualis is an expansive education platform that engages admins, teachers, and students in one place. With the ability to generate content, forms, custom Dashboards, classes, lessons, rubrics, and custom branded UI.
       Reskinned the entire application to give a more modern look as the current was very outdated. The new look created greater interest to investors looking to buy our product."
       link= "www.boltstack.com"
       buttonText="Log in available upon request"
       />
       
       <Card imgSrc={WonderInk}
       title="WonderInk Case Study"
       info="WonderInk is a learning management system for leaders, parents, and students. I revamped the front-end interface to align with brand recognition, taking the lead in design decisions. Additionally, I developed the parent portal as a vital link between parents, students, and youth leaders, fostering continuous engagement in learning throughout the week. Through curated videos and interactive games, it facilitates a dynamic educational experience for all involved. Log-in info available upon request"
       link="https://xd.adobe.com/view/b3f471b6-89cd-4b01-aaa8-60b6307dc14d-e6a7/"
       buttonText="Go to Adobe XD Case Study"/>

<Card imgSrc={Prayer}
       title="Answered"
       info="Adobe XD mock up of an app that connects religious groups to form community lead prayers across multiple platforms and locations."
       link="https://xd.adobe.com/view/fa61ba9a-951f-4191-ac83-316fc359dd9d-af32/" 
       buttonText="Go to Adobe XD Case Study"/>

<Card imgSrc={Pill}
       title="RemiRX Figma"
       info="Review the Figma mockup presenting RemiRx, an app designed for managing medication using a Bluetooth pillbox. Explore its user-friendly interface and innovative features tailored to streamline healthcare management."
       link="https://www.figma.com/board/HG0IgJzCDkCGT8pyc2MGIZ/Untitled?node-id=0-1&t=j7UsmEy5qFqBadO9-1"
       buttonText="Go to site"/>

<Card imgSrc={VideoJill}


       title="Video tutorial"
       info='"Hey she knows how to do video too!" I created this Video tutorial using Adobe Premier and demonstrated product features'
       link="https://vimeo.com/916271339"
       buttonText="Watch on Vimeo"/>
       

       <Card imgSrc={Toto}
       title="Friends of Toto"
       info="A vibrant pet socialization platform that allows enthusiasts to connect, share adorable photos, and engage in a lively community. Leveraged technologies such as React, Node.js, GraphQL, MongoDB, and AWS S3 to create a dynamic and user-friendly web application, showcasing proficiency in full-stack web development and cloud services for storage and scalability."
       link="https://friendsoftoto.herokuapp.com/"
       buttonText="Go to site"/>



     

     
      

      </div>
    
  );
}



