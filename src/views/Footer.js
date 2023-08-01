import logo2 from "../assets/logo2.jpg";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

function Footer()
{




    return(
        
        <footer className="footer" aria-label="footer">
            <p>
                <img src={logo2} alt="Footer Little Lemon Restaurant logo" width="162" height="279" />
            </p>
           
           <ul>
                <li><HashLink smooth to="/home#top" >Home</HashLink></li>
                <li><HashLink smooth to="/home#about" >About</HashLink></li>
                <li><HashLink smooth to="/home#specials" >Specials</HashLink></li>
                <li><HashLink smooth to="/home#testimonials">Testimonials</HashLink></li>
                <li><Link to="/booking" >Reservations</Link></li>
 

               
           </ul>

           <div className="font-white">
            <h3>Contact</h3>
            <p>
                <b>Address:</b><br/>
                101 Pioneer Road<br/>
                #01-01<br/>
                Singapore 639101
            </p>

            <p><b>Telephone:</b><br/>
            +65 98989898
            </p>

            <p><b>Email:</b><br/>
            lemon@lemon.com
            </p>

           </div>

           <div>
            
            
                <ul>
                    <li key="facebook"><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                    <li key="instagram"><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                    <li key="twitter"><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>           
            </ul>
       
           </div>

        </footer>
        
    );

}
export default Footer;

