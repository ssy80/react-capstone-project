import logo2 from "../assets/logo2.jpg";
import { Link } from "react-router-dom";

function Footer()
{


    return(
        
        <footer className="footer">
            <p>
                <img src={logo2} alt="Footer Little Lemon Restaurant logo" width="162" height="279" />
            </p>
           
           <ul>
                <li><Link to="/" >Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#special">Menu</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
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
            
            <p>
                <ul>
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                    <li><a href="https://www.twitter.com">Twitter</a></li>           
            </ul>
           </p>
           </div>

        </footer>
        
    );

}
export default Footer;