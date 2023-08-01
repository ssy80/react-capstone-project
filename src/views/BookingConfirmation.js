import { useLocation,useNavigate } from "react-router-dom";


function BookingConfirmation(props){

    const location = useLocation();
    const navigate = useNavigate();


   function handleClose()
    {
        //navigate back to booking form
        navigate('../booking');
    }

return(

    <section className="booking-container" aria-label="view booking details">
            
    
    <div className="booking-section">

            <div >
            <span className="section-title font-F4CE14">Reservation Details</span>
            </div>


        <div className="font-white">
        
        
    
             <p align="center">
                Booking date:  {location.state.bookingDate}<br/>
                Booking time: {location.state.bookingTime}<br/>
                No. of diners: {location.state.numDiners}<br/>
                Occasion:    {location.state.occasion}<br/>
                Comments:    {location.state.comments}<br/>
                First name:  {location.state.firstName}<br/>
                Last name:   {location.state.lastName}<br/>
                Email:        {location.state.email}<br/>
                Contact:      {location.state.contact}<br/>
             </p>
    
            </div>

    <br/>
    <div className="button_link link-pointer" onClick={handleClose} aria-label="close view booking confirmation">OK</div>
    <br/>


    </div>

    </section>


);

}
export default BookingConfirmation;