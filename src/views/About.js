
import  mario from "../assets/Mario-and-Adrian-A.jpg";
import  adrian from "../assets/Mario-and-Adrian-b.jpg";

function About(){



    return(
        <section id="about" className="about-section">

                <div className="about-section-1">
                <span className="section-title">About</span><br/>
                <span className="section-sub-title ">Chicago</span><br/>
                <p className="about-desc">                   
                    <span >Little Lemon is owned by two Italian brothers, 
                    Mario and Adrian, who moved to the United States 
                    to pursue their shared dream of owning a restaurant.
                    </span>
                </p>

                </div>

                <div className="about-section-1">
                <img className="mario-pic" src={mario} alt="Mario and Adrain picture 1" width={272} height={338}/>
                <img src={adrian} alt="Mario and Adrian picture 2" width={272} height={338}/>
                </div>


            </section>
    );

};

export default About;