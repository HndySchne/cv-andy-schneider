import './contact.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
      <div>
          <h2> <FontAwesomeIcon icon={faEnvelope} /> CONTACT</h2>
          <div className="contact">
            <h3>Linkedin</h3>
            <a href="https://www.linkedin.com/in/andy-schneider-b6a260117"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
      </div>
    );
  }
  
  export default Contact;
  