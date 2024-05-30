import "../styles/portCard.css";
import LV from "../images/LVSHAPES.svg";
import Toto from '../images/totosmall.png'



const boxStyle = {
  height: "500px",
  width: "100vw",
  display: "flex", 
  alignItems: "center"

  
 
};



export default function Design() {
  return (
    <div className={boxStyle} designWork>
      <div className="oneHundred"> <p className="totoSays">Toto says check out some examples of my latest work. There are design projects and front end builds in a low-code environment. </p><img width="300px"src={Toto} alt="Work woof woof" /></div>
     
      <ul className="workLi">
      
      <li><a className="workLi" href="https://www.boltstack.com" target="_blank"> I designed and built this marketing Website's front end </a></li>
      <li><a className="workLi" href="https://xd.adobe.com/view/b3f471b6-89cd-4b01-aaa8-60b6307dc14d-e6a7/" target="_blank"> Case study for Wonder Ink a Learning Management System for youth groups and families</a></li>
      <li><a  className="workLi"href="https://www.figma.com/board/HG0IgJzCDkCGT8pyc2MGIZ/Untitled?node-id=0-1&t=j7UsmEy5qFqBadO9-1" target="_blank"> Figma mock up for "RemiRX" app </a></li>
      <li><a  className="workLi"href="https://boltstack-dev.softwarebbd.com/rrframework/html/web/index.html?screenId=65cacde38f08f672bcca5ea9&appId=65ca99828f08f672bcca5dea&preview=1&rr_dev=true&" target="_blank"> Front end functional mock-up for medication app </a></li>
      <li><a className="workLi" href="https://friendsoftoto.herokuapp.com/" target="_blank"> Friends of Toto, a social media app for pets because people talk too much - Username: Dorothy@fototo.com / pw: password01 </a> </li>
      <li><a className="workLi" href="https://vimeo.com/916271339" target="_blank"> Another skill of mine is educating others here is a video I narrated and edited giving a product demo </a> </li>


    


      </ul>
   
    
      </div>
    
  );
}
