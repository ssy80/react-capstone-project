import greek_salad from "../assets/greek-salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemon_dessert from "../assets/lemon-dessert.jpg";



function Special(){



    return(

        <section id="special" className="special-section">
               
        <div className="special-section-1">
           <div className="section-title font-495e57">Specials</div>                 
           <div className="button_link">Menu</div>
        </div>
        

         <div className="special-section-2"> 

             <div className="card">
             <img src={greek_salad} width="256" height="186" alt="greek_salad"></img>
             <p>
                 <span className="float-left" >Greek Salad</span>    <span className="float-right">$10.99</span>     
             </p>
             
             <p className="food-desc">The famous greek salad of crispy lettuce, peppers, 
                 olives and our Chicago style feta cheese, garnished 
                 with crunchy garlic and rosemary croutons. 
             </p>                        
             <p>Order a delivery</p>
             </div>

             <div className="card">
             <img src={bruchetta} width="256" height="186" alt="bruchetta"></img>           
             <p>
                 <span className="float-left" >Bruschetta</span>    <span className="float-right">$12.99</span>     
             </p>
            
             <p className="food-desc">Our Bruschetta is made from 
                                     homemade grilled bread that has 
                                     been smeared with garlic and 
                                     seasoned with salt and olive oil. 
                                     Topped with fresh vegetables.
             </p>                        
             <p>Order a delivery</p>
             </div>

             <div className="card">
             <img src={lemon_dessert} width="256" height="186" alt="lemon_dessert"></img>           
             <p>
                 <span className="float-left" >Lemon Dessert</span>    <span className="float-right">$9.99</span>     
             </p>
             
             <p className="food-desc">This comes straight from 
                                     grandma’s recipe book, every last 
                                     ingredient has been sourced and 
                                     is as authentic as can be imagined.
             </p>                        
             <p>Order a delivery</p>
             </div>

         </div>                

        
     </section>

    );
}

export default Special;