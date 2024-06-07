import callMe from '../images/callivy.svg'
import emailMe from '../images/emailme.svg'
import Github from '../images/github-brands.svg'
const boxStyle = {
    height: '300px',
    paddingTop: '5rem', 
    width: '100vw', 
   
    margin:0

}

const Contact = () => {
    return (
        <div className='contact' style={boxStyle}>
          <div className="oneHundred"> <p className="totoSays">Contact</p></div>
        <div className='contactData'> <a className='contacta'
           
           href="tel:3039013230"
           onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
         >
           (303) 901-3230
       
         </a>

         <div className="github"><a href="https://github.com/ShyFidelity" className="github"><img width="50px"src={Github} alt="github logo" /></a></div>
      
         <a className='contacta' href="mailto:fitzmauricejillian@gmail.com"> fitzmauricejillian@gmail.com </a></div>
                      {" "}
         
        </div>
    )
}

export default Contact