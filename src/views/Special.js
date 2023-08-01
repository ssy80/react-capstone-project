import greek_salad from "../assets/greek-salad.jpg";
import bruchetta from "../assets/bruchetta.png";
import lemon_dessert from "../assets/lemon-dessert.jpg";




const menu = [
    {id:0, img_src: `${greek_salad}`, width:256, height:186, alt: "greek salad image", name: "Greek Salad", price: "$10.99", desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
    {id:1, img_src: `${bruchetta}`, width:256, height:186, alt: "bruchetta image", name: "Bruschetta", price: "$12.99", desc: "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."},
    {id:2, img_src: `${lemon_dessert}`, width:256, height:186, alt: "lemon dessert image", name: "Lemon Dessert", price: "$10.99", desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined, highly recommended."},
];


function Special(){



    return(

        <section id="specials" className="special-section" aria-label="specials">
               
        <div className="special-section-1">
           <h1 className="font-495e57">Specials</h1>               
           <div className="button_link" aria-label="menu specials">Menu</div>
        </div>
        

         <div className="special-section-2"> 

        {
            menu.map((special)=>(

                <article key={special.id} className="card">
                <img src={special.img_src} width={special.width} height={special.height} alt={special.alt}></img>
                <p>
                    <span className="float-left" >{special.name}</span>    <span className="float-right">{special.price}</span>     
                </p>
                
                <p className="food-desc">{special.desc} 
                </p>                        
                <p>Order a delivery</p>
                </article>

                


            ))
        }
            

         </div>                

        
     </section>

    );
}

export default Special;