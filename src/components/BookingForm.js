import {useState,useRef} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


function BookingForm(props){

 //   var currDate =new Date().toISOString().substring(0,10);
/*const [bookingDate, setBookingDate] = useState("");
const [bookingTime,setBookingTime] = useState("");
const [numDiners, setNumDiners] = useState(1);
const [occasion, setOccasion] =useState("");
const [comments, setComments] = useState("");
const [firstName, setFirstName] =useState("");
const [lastName, setLastName] = useState("");
const [email,setEmail] = useState("");
const [contact, setContact] = useState("");*/

const bookingDateRef = useRef();
const bookingTimeRef = useRef();
const numDinersRef = useRef();
const occasionRef = useRef();
const commentsRef = useRef();
const firstNameRef = useRef();
const lastNameRef = useRef();
const emailRef = useRef();
const contactRef = useRef();


const digitsOnly = (value) => /^\d+$/.test(value);

const formik = useFormik({

    initialValues: {
      bookingDate: "",
      bookingTime: "", 
      numDiners: 1,   
      occasion: "",
      comments: "",
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
    },

    //validate,          //removed validate , use yup like below
    validationSchema: Yup.object({

        bookingDate: Yup.string()
                     .required('Required'),
        bookingTime: Yup.string()
                     .required('Required'),  
        numDiners: Yup.number()
                   //.min(1, "Min 1 diner")
                   .max(10, "Max 10 diners")                  
                   .required("Required"),        
        comments: Yup.string()
                .max(100, 'Must be 100 characters or less'),              
        firstName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        contact: Yup.string()
                //.test('Digits only', 'The field should have digits only', digitsOnly)
                .test('Digits only', 'Must be 8 digit phone number', digitsOnly)
                .min(8, "Must be 8 digit phone number")
                .max(8, "Must be 8 digit phone number")
                .required('Required')

        }),


        onSubmit: values => {
            const toAddBookingSlot= {bookingDate:values.bookingDate, bookingTime:values.bookingTime, numDiners: values.numDiners, occasion: values.occasion, comments: values.comments, firstName: values.firstName, lastName: values.lastName, email: values.email, contact: values.contact};
            props.addBooking(toAddBookingSlot);
        }
});


//const [showConfirmation, setShowConfirmation] = useState(false);
//const [newBooking, setNewBooking] = useState({bookingDate:"2023-07-23", bookingTime:"7.00PM", numDiners: 2, occasion:"Diner", comments:"", firstName:"", lastName:"", email:"", contact:""});
//const [newBooking, setNewBooking] = useState(null);

/*function handleSubmit(e)
{
    e.preventDefault();
    //console.log("submit clicked");
    const toAddBookingSlot= {bookingDate:bookingDate, bookingTime:bookingTime, numDiners: numDiners, occasion: occasion, comments: comments, firstName: firstName, lastName: lastName, email: email, contact: contact};
    props.addBooking(toAddBookingSlot);
    //setNewBooking(toAddBookingSlot);
    //setShowConfirmation(true);
    clear();
}*/

/*function clear(){

    setBookingDate("");
    setBookingTime("");
    setNumDiners(1);
    setOccasion("");
    setComments("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");

}*/

function handleBookingDateChange(e)
{
    //setBookingDate(e.target.value);
    //bookingDateRef.current.focus();
    //console.log(e.target.value);
    //props.initializeTimes();
    props.updateTimes(e.target.value);
    formik.values.bookingDate = e.target.value;
}

/*function handleBookingTimeChange(e)
{
    setBookingTime(e.target.value);
    bookingTimeRef.current.focus();
    console.log(e.target.value);
}*/


/*function handleNumDinersChange(e)
{
    setNumDiners(e.target.value);
    numDinersRef.current.focus();
    console.log(e.target.value);
}*/

/*function handleOccasionChange(e)
{
    setOccasion(e.target.value);
    occasionRef.current.focus();
    console.log(e.target.value);
}*/


/*function handleCommentsChange(e)
{
    setComments(e.target.value);
    commentsRef.current.focus();
    console.log(e.target.value);
}*/

/*function handleFirstNameChange(e)
{
    setFirstName(e.target.value);
    firstNameRef.current.focus();
    console.log(e.target.value);
}*/

/*function handleLastNameChange(e)
{
    setLastName(e.target.value);
    lastNameRef.current.focus();
    console.log(e.target.value);
}*/

/*function handleEmailChange(e)
{
    setEmail(e.target.value);
    emailRef.current.focus();
    console.log(e.target.value);
}*/

/*function handleContactChange(e)
{
    setContact(e.target.value);
    contactRef.current.focus();
    console.log(e.target.value);
}*/

function clearBooking(){
    props.clearBooking();
}

//get available time slot for date selected
/*function getTimeAvailable()
{

    let cloneAvailableTimes = [...availableTimes];
    props.bookedSlots.map((bookedSlot)=>{

        if(bookedSlot.bookingDate===bookingDate)
        {
            cloneAvailableTimes = cloneAvailableTimes.filter(time =>        
                  bookedSlot.bookingTime !== time
            )
        }
    }
    );
    return cloneAvailableTimes;
}*/


    return(
       
        <form onSubmit={formik.handleSubmit}>

       <div className="booking-section">

        <div >
        <span className="section-title font-F4CE14">Reserve a table</span>
        </div>

      {  <div className="font-white">
            <h3>Current Booking <span className="text-link link-pointer font-white" onClick={clearBooking}>(click clear booking)</span></h3>
            
             <ul>
            {
               
                props.bookedSlots.map((bookedSlot)=>
                    
                    <li key={`${bookedSlot.bookingDate}${bookedSlot.bookingTime}`}>{bookedSlot.bookingDate} , {bookedSlot.bookingTime}</li>                          
                    
                )
               
            }
             </ul>

                <br/>
                
                 <br/>

        </div>}


        <div>
        <span className="section-sub-title font-F4CE14">New booking</span>
        </div>

        <div className="booking-section-2 font-white">
            <div>
                <label className="label-text" htmlFor="bookingDate">Booking date*</label><br/>
                <input 
                ref={bookingDateRef} 
                //value={bookingDate} 
                onChange={handleBookingDateChange} 
                className="input-text-size 
                rounded-corner" 
                id="bookingDate" 
                type="date" 
                name="bookingDate"
                //onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bookingDate}
                />  
                 {formik.touched.bookingDate && formik.errors.bookingDate ? <div className="font-error">{formik.errors.bookingDate}</div> : null}                  
            </div>

            <div>
                <label className="label-text" htmlFor="bookingTime">Booking time*</label><br/>
                <select 
                ref={bookingTimeRef} 
                //value={bookingTime} 
                //onChange={handleBookingTimeChange} 
                className="input-text-size 
                rounded-corner" 
                id="bookingTime" 
                name="bookingTime" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bookingTime}
                >
                {
                    props.availableTimes.map((timing,index)=>
                    <option key={index} value={timing}>{timing}</option>
                    )
                }
                
                </select>
                {formik.touched.bookingTime && formik.errors.bookingTime ? <div className="font-error">{formik.errors.bookingTime}</div> : null}
            </div>

            <div>
                <label className="label-text" htmlFor="numDiners">Number of diners*</label><br/>
                <select ref={numDinersRef} 
                //value={numDiners} 
                //onChange={handleNumDinersChange}  
                className="input-text-size rounded-corner" 
                id="numDiners" 
                name="numDiners" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numDiners}
                >
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
                {formik.touched.numDiners && formik.errors.numDiners ? <div className="font-error">{formik.errors.numDiners}</div> : null}
            </div>

            <div>
                <label className="label-text" htmlFor="occasion">Occasion</label><br/>
                <select 
                ref={occasionRef} 
                //value={occasion} 
                //onChange={handleOccasionChange}  
                className="input-text-size rounded-corner" 
                id="occasion" 
                name="occasion" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.occasion}
                >
                <option value=""></option>
                <option value="Dinner">Dinner</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Others">Others</option>
                </select>
                {formik.touched.occasion && formik.errors.occasion ? <div className="font-error">{formik.errors.occasion}</div> : null}
            </div>

          
            </div>

        
        <div>
            <label className="label-text font-white" htmlFor="comments">Comments</label><br/>
            <textarea 
            ref={commentsRef} 
            //value={comments} 
            //onChange={handleCommentsChange} 
            className="input-text-size rounded-corner" 
            id="comments" 
            name="comments" 
            rows="4" 
            cols="20" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comments}
            />
            {formik.touched.comments && formik.errors.comments ? <div className="font-error">{formik.errors.comments}</div> : null}
        </div>

        <div className="booking-section-3 font-white">
            <div>
            <label className="label-text" htmlFor="firstName">First name*</label><br/>
            <input 
            ref={firstNameRef} 
            //value={firstName} 
            //onChange={handleFirstNameChange} 
            className="input-text-size rounded-corner"  
            type="text" 
            name="firstName" 
            id="firstName" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? <div className="font-error">{formik.errors.firstName}</div> : null}
            </div>

            <div>
            <label className="label-text" htmlFor="lastName">Last name*</label><br/>
            <input 
            ref={lastNameRef} 
            //value={lastName} 
            //onChange={handleLastNameChange} 
            className="input-text-size rounded-corner" 
            type="text" 
            name="lastName" 
            id="lastName" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? <div className="font-error">{formik.errors.lastName}</div> : null}
            </div>

            <div>
            <label className="label-text" htmlFor="email">Email*</label><br/>
            <input 
            ref={emailRef} 
            //value={email} 
            //onChange={handleEmailChange}  
            className="input-text-size rounded-corner"  
            type="email" 
            name="email" 
            id="email" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div className="font-error">{formik.errors.email}</div> : null}           
            </div>

            <div>
            <label className="label-text" htmlFor="contact">Contact*</label><br/>
            <input 
            ref={contactRef} 
            //value={contact} 
            //onChange={handleContactChange} 
            className="input-text-size rounded-corner"  
            type="text" 
            name="contact" 
            id="contact" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
            />
            {formik.touched.contact && formik.errors.contact ? <div className="font-error">{formik.errors.contact}</div> : null}                      
            </div>

        </div>
      
        <div>
       
       <p>
       <button type="submit" className="button_submit link-pointer" aria-label="reserve table" >Reserve now</button>
       </p>

        </div>

        </div>
    </form>
 

        

     
    );
}
export default BookingForm;