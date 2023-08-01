
import  mario from "../assets/Mario-and-Adrian-A.jpg";
import  adrian from "../assets/Mario-and-Adrian-b.jpg";

function About(){



    return(
        <section id="about" className="about-section" aria-label="about">

                <div className="about-section-1">
                <h1 className="font-495e57">About</h1>
                <h2 className="font-F4CE14">Chicago</h2>
                <p className="about-desc font-495e57">                   
                    <span >Little Lemon is owned by two Italian brothers, 
                    Mario and Adrian, who moved to the United States 
                    to pursue their shared dream of owning a restaurant.
                    </span>
                </p>

                </div>

                <div className="about-section-1">
                <img className="mario-pic" src={mario} alt="Mario and Adrian picture 1" width={272} height={338}/>
                <img src={adrian} alt="Mario and Adrian picture 2" width={272} height={338}/>
                </div>


            </section>
    );

};

export default About;