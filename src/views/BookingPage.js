

import Header from "../views/Header.js"
import Nav from "../views/Nav.js"
import Footer from "../views/Footer.js"

function BookingPage(){

    return(
       

        <div className="booking-container">
            
            
            <div className="booking-section">

                <div className="booking-section-1">
                <span className="section-title font-F4CE14">Reserve a table</span>
                </div>

                <div className="booking-section-2 font-white">
                    <div>
                        <label className="label-text" for="bookingDate">Booking date*</label><br/>
                        <input className="input-text-size rounded-corner" id="bookingDate" type="date"></input>
                    </div>

                    <div>
                        <label className="label-text" for="bookingTime">Booking time*</label><br/>
                        <select className="input-text-size rounded-corner" id="bookingTime" name="bookingTime" value="">
                        <option value="6.00PM">6.00PM</option>
                        <option value="6.30PM">6.30PM</option>
                        <option value="7.00PM">7.00PM</option>
                        <option value="7.30PM">7.30PM</option>
                        <option value="8.00PM">8.00PM</option>
                        </select>
                    </div>

                    <div>
                        <label className="label-text" for="numDiners">Number of diners*</label><br/>
                        <select className="input-text-size rounded-corner" id="numDiners" name="numDiners" value="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>

                    <div>
                        <label className="label-text" for="occasion">Occasion</label><br/>
                        <select className="input-text-size rounded-corner" id="occasion" name="occasion" value="">
                        <option value="Just Dinner">Just Dinner</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Others">Others</option>
                        </select>
                    </div>

                  
                    </div>

                
                <div>
                    <label className="label-text font-white" for="comments">Comments</label><br/>
                    <textarea className="input-text-size rounded-corner" id="comments" name="comments" rows="4" cols="20" ></textarea>
                </div>

                <div className="booking-section-3 font-white">
                    <div>
                    <label className="label-text" for="firstName">First Name*</label><br/>
                    <input className="input-text-size rounded-corner"  type="text" name="firstName" id="firstName"></input>
                    </div>

                    <div>
                    <label className="label-text" for="lastName">Last Name*</label><br/>
                    <input className="input-text-size rounded-corner"  type="text" name="lastName" id="lastName"></input>
                    </div>

                    <div>
                    <label className="label-text" for="email">Email*</label><br/>
                    <input className="input-text-size rounded-corner"  type="text" name="email" id="email"></input>
                    </div>

                    <div>
                    <label className="label-text" for="contact">Contact*</label><br/>
                    <input className="input-text-size rounded-corner"  type="text" name="conatct" id="contact"></input>
                    </div>

                </div>
              
                <div>
                <p>
                <div className="button_link">Reserve now</div>
                </p>
                </div>

            </div>
            
       </div>

     
    );
}

export default BookingPage;