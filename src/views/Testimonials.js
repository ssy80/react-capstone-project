
import karen from "../assets/Karen.jpg";
import john from "../assets/john.jpg";
import david from "../assets/david.png";
import james from "../assets/james.png"

function Testimonials(){


return(

    

    <section id="testimonials" className="testimonials-section">
          
    <div className="testimonials-section-1 section-title font-F4CE14">
    Testimonials
    </div>
       

       <div className="testimonials-section-2">

               <div className="testimonial-card">
                   <div >
                       <h3>5 Stars</h3>

                       <img src={karen} alt="Karen a reviewer" width={47} height={46}/> <b>Karen</b>
                       
                       <p>
                           Best food in the world!
                       </p>

                   </div>
               </div>

               <div className="testimonial-card">
                <div>
                       <h3>5 Stars</h3>

                       <img src={john} alt="John a reviewer" width={47} height={46}/> <b>John</b>
                       
                       <p>
                           Excellent service !
                       </p>
                       </div>
               </div>

               <div className="testimonial-card">
                   <div >
                       <h3>5 Stars</h3>

                       <img src={james} alt="James a reviewer" width={47} height={46}/> <b>James</b>
                       
                       <p>
                           Quality everytime !
                       </p>

                   </div>
               </div>

       <div className="testimonial-card">
           <div >
               <h3>5 Stars</h3>

               <img src={david} alt="david a reviewer" width={47} height={46}/> <b>David</b>
               
               <p>
                    Very nice place !
               </p>

           </div>
       </div>
       </div>

       </section>

);


}

export default Testimonials;