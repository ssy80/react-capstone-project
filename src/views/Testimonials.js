
import karen from "../assets/Karen.jpg";
import john from "../assets/john.jpg";
import david from "../assets/david.png";
import james from "../assets/james.png";
import star from "../assets/star.png";

function Testimonials(){

    const testimonials = 
    [
    {id:0, rating: 5, name: "Karen", img_src:`${karen}`, alt:"Karen a reviewer", width:"47", height:"46", review:"Best food in the world!"},
    {id:1,rating: 4, name: "John", img_src:`${john}`, alt:"John a reviewer", width:"47", height:"46", review:"Excellent service !"},
    {id:2,rating: 5, name: "James", img_src:`${david}`, alt:"James a reviewer", width:"47", height:"46", review:"Quality everytime !"},
    {id:3,rating: 4, name: "David", img_src:`${james}`, alt:"David a reviewer", width:"47", height:"46", review:"Very nice place !"}
    ];


return(

    <section id="testimonials" className="testimonials-section" aria-label="testimonials">
          
    <div className="testimonials-section-1">
    <h1 className="font-F4CE14">Testimonials</h1>
    </div>
    
   

       <div className="testimonials-section-2">


      {testimonials.map((testi,index)=>( 
      <div key={testi.id} className="testimonial-card">
              <div>
                <h3>

                {Array.from({ length: `${testi.rating}` }, ((v,i) => <img key={`${testi.name}${i}`} src={star} alt="star icon" width={30} height={30}/>))}
           
                 </h3>
                 <img src={testi.img_src} alt={testi.alt} width={testi.width} height={testi.height}/><b>{testi.name}</b>
                
                <p>
                    {testi.review}
                </p>
               </div>
               </div>
               
        
        ))}


        </div>
             
      
       </section>

);


}

export default Testimonials;