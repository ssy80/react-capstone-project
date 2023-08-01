import logo from '../assets/logo.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

function Nav()
{


    return(
        
        

       

        <nav id="top" className="container-flex" aria-label="navigation">

            <Link to="/home" ><img src={logo} alt="Little Lemon Restaurant logo" width="200"/></Link>

            <ul >
                <li><Link to="/home" >Home</Link></li>
                <li><HashLink smooth to="/home#about" >About</HashLink></li>
                <li><HashLink smooth to="/home#specials" >Specials</HashLink></li>
                <li><HashLink smooth to="/home#testimonials">Testimonials</HashLink></li>
                <li><Link to="/booking" >Reservations</Link></li>
            </ul>
        
        </nav>
  
       


        
    );

}
export default Nav;