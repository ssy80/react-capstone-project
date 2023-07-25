import restaurant_image from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";


function Hero()
{

    return(
                <section className="hero-section">

                <div className="hero-section-1">
                <p><span className="section-title font-F4CE14">Little Lemon</span><br/>
                <span className="section-sub-title font-white">Chicago</span></p>
                <br/>
                <p className="font-white" >
                    We are a family-owned Mediterranean 
                    restaurant, focused on traditional 
                    recipes served with a modern twist.
                </p>


                <br/>
                <div className="button_link"><Link to="/booking" >Reserve a table</Link></div>

                </div>

                <div className="hero-section-2"> 
                <img src={restaurant_image} width="376" height="325" alt="Little Lemon Restaurant image"></img>
                </div>

                </section>

    );
}


export default Hero;