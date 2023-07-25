import { Routes, Route, Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import BookingPage from "./BookingPage";

function Nav()
{


    return(
        
        

       

        <nav className="container-flex">

        <img src={logo} alt="Little Lemon Restaurant logo" width="200"/>

            <ul >
                 <li><Link to="/" >Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#special">Menu</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><Link to="/booking" >Reservations</Link></li>
            </ul>
        
        </nav>

       


        
    );

}
export default Nav;