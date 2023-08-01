import restaurant_image from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";


function Hero()
{

    return(
                <section className="hero-section" aria-label="hero">

                <div className="hero-section-1">
                <h1 className="font-F4CE14">Little Lemon</h1> 
                <h2 className="font-white">Chicago</h2>
                <p className="font-white" >
                    We are a family-owned Mediterranean 
                    restaurant, focused on traditional 
                    recipes served with a modern twist.
                </p>


                <br/>
                <div className="button_link" aria-label="reserve a table"><Link to="/booking" >Reserve a table</Link></div>

                </div>

                <div className="hero-section-2"> 
                <img src={restaurant_image} width="376" height="325" alt="Little Lemon Restaurant"></img>
                </div>

                </section>

    );
}


export default Hero;