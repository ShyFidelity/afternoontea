import callMe from '../images/callivy.svg'
import emailMe from '../images/emailme.svg'
import Github from '../images/github-brands.svg'
import Link from '../images/linkedin_3536569.png'
import Cowgirl from '../images/callmecowgal.png'

const boxStyle = {
    
    paddingTop: '5rem', 
    width: '100vw', 
   
    margin:0

}

const Contact = () => {
    return (
        <div className='contact' style={boxStyle}>
          <div className="cowgirl"><img width="300px"src={Cowgirl}></img></div>
          <div className="oneHundred"> <p className="totoSays">Contact</p></div>
        <div className='contactData'> <a className='contacta'
           
           href="tel:3039013230"
           onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
         >
           <span id='three'>303.</span> <span id="nine">901.3230</span>
       
         </a>

         <div className="github"><a href="https://github.com/ShyFidelity" target="_blank" className="github"><img width="50px"src={Github} alt="github logo" /></a></div>
         <div className="github"><a href="https://www.linkedin.com/in/jillianfitzmaurice100/" target="_blank" className="Link"><img width="50px"src={Link} alt="linkedin logo" /></a></div>
         <a id="nine" href="mailto:fitzmauricejillian@gmail.com"> fitzmauricejillian@gmail.com </a></div>
                      {" "}
         
        </div>
    )
}

export default Contact