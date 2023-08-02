import { useNavigate } from "react-router-dom";
import {useState,useReducer,useEffect} from "react";
import BookingForm from "../components/BookingForm";
import successicon from "../assets/success-icon.png";
import failedicon from "../assets/failedicon.png";

import {fetchAPI,    submitAPI} from "../api.js";

function BookingPage(){

    const [bookedSlots,setBookedSlots] = useState([]);
    //const [bookedSlots,setBookedSlots] = useState([{bookingDate:"2023-07-23", bookingTime:"7.00PM", numDiners: 2, occassion:"Diner", comments:"", firstName:"", lastName:"", email:"", contact:""}]);
    //useState([{bookingDate:"2023-07-23", bookingTime:"7.00PM", numDiners: 2, occassion:"Diner", comments:"", firstName:"", lastName:"", email:"", contact:""}]);
    const [newBooked, setNewBooked] = useState(null);
    const [toAdd,setToAdd] = useState(false);
    const initTimes =  [""] ;

    const [availableTimes, dispatch] = useReducer(reducer, initTimes);

    const currentDate = new Date().toISOString().split('T')[0];
    const [dateToBook, setDateToBook] = useState(currentDate);
    const [submitStatus, setSubmitStatus] = useState(null);

    const navigate = useNavigate();

    function reducer(availableTimes, action) {

        if (action.type === 'CHECK_DATE') {
           
           //do something then return the new state
          // setDateToBook(action.dateSelected);
            /*let cloneAvailableTimes = [...availableTimes];
            bookedSlots.map((bookedSlot)=>{
            
                    if(bookedSlot.bookingDate===action.dateSelected)
                    {
                        cloneAvailableTimes = cloneAvailableTimes.filter(time =>        
                            bookedSlot.bookingTime !== time
                        )
                    }                   
                }
            )
                return cloneAvailableTimes;
            */

          }
        /*  else if(action.type === 'INIT_TIME')
          {
            return [...initTimes];
          }*/
          else if(action.type === 'initializeTimes')  //return booking time available
          {
            return ["",...action.availableTimes];
          }


      };

    //get booked slots from storage
    useEffect(()=>{

        const bookedSlots = getBookedSlotsFromStorage();

        if(bookedSlots!==null ){
            setBookedSlots(bookedSlots);
        }
    

    },[]);

    //api send dateToBook to get booking time available
    useEffect(()=>{

        //console.log(dateToBook);

        fetchAPI(new Date(dateToBook))
        .then(response => JSON.parse(response))            
        .then(availableTimes => {
             
                let cloneAvailableTimes = [...availableTimes];
                bookedSlots.map((bookedSlot)=>{
                
                        if(bookedSlot.bookingDate===dateToBook)
                        {
                            cloneAvailableTimes = cloneAvailableTimes.filter(time =>        
                                bookedSlot.bookingTime !== time
                            )
                        }                   
                    }
                )
             
             dispatch({type: 'initializeTimes', availableTimes: cloneAvailableTimes}) 
            
            })   
        //.then(availableTimes => console.log(availableTimes))   

    },[dateToBook]);

    //api submit newBooked 
    useEffect(()=>{

        if(newBooked!==null){

        submitAPI(newBooked)
        .then(response => JSON.parse(response))
        .then( status=> {
            //console.log(status);
            setSubmitStatus(status);

               if(status){
                const newBookedSlots = [...bookedSlots,newBooked];
                setBookedSlots(newBookedSlots);
                setToAdd(true);
                }
           
        });
    }

    },[newBooked]);

    useEffect(()=>{

        if(toAdd){ saveBookedSlotsToStorage(); }

    },[toAdd]);

    function clearBooking()
    {
        setBookedSlots([]);
        setToAdd(true);
    }

    function updateTimes(dateSelected){
        setDateToBook(dateSelected);
        //dispatch({ type: "CHECK_DATE", dateSelected: dateSelected});
      };

    
    function  initializeTimes(){
        const currentDate = new Date().toISOString().split('T')[0];
        setDateToBook(currentDate);
        //dispatch({ type: "INIT_TIME"});
        //fetchAPI(date)

    }

    //add a new booking obj
    function addBooking(bookingSlot){
        setNewBooked(bookingSlot);
    }
    
    const viewReservationDetails = ()=> {
        setNewBooked(null); 
        setSubmitStatus(null); 
        //saveBookedSlotsToStorage(); 
        setDateToBook(null);
        goToConfirmationPage();

    };

    const handleClose = () => {
        setNewBooked(null); 
        setSubmitStatus(null); 
        //saveBookedSlotsToStorage(); 
        setDateToBook(null);
    };

    const saveBookedSlotsToStorage = ()=> {window.localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));setToAdd(false);}
    
    const getBookedSlotsFromStorage = ()=> JSON.parse(window.localStorage.getItem('bookedSlots'));

    const goToConfirmationPage = ()=> navigate('../bookingConfirmation', { state: newBooked});
    
         
       const showSuccessBooking = (newBooked!==null) ? (
       
           <section className="booking-section" aria-label="success booking status">

            <div >
            <span className="section-title font-F4CE14">Successful Reservation</span>
            </div>

            <img src={successicon} width="100" height="100" alt="success icon"/>
           
            <br/>
            <div className="text-link link-pointer font-white" onClick={viewReservationDetails}>View details of reservation</div>

            <br/>
            <div className="button_link link-pointer" onClick={handleClose} aria-label="close success booking status">OK</div>
            <br/>

           </section>

         ) : false;


        const showFailedBooking =  (

            <section className="booking-section" aria-label="close failed booking status">
                <div >
                <span className="section-title font-red">Failed Reservation</span>
                </div>
                <img src={failedicon} width="100" height="100" alt="failed icon"/>
                <div className="font-white">


                <p align="center">
                        Reservation failed, please try again later.
                </p>

            </div>
                <br/>
                <div className="button_link link-pointer" onClick={handleClose} aria-label="close failed booking status">OK</div>
                <br/>
            </section>
        );
                                 
    


    return(

        <div className="booking-container">

        {(newBooked!==null && submitStatus) && showSuccessBooking}
        {(newBooked!==null && !submitStatus) && showFailedBooking}
        

        {submitStatus===null && <BookingForm clearBooking={clearBooking} bookedSlots={bookedSlots} addBooking={addBooking} availableTimes={availableTimes} updateTimes={updateTimes} initializeTimes={initializeTimes}/> }

        </div>
    )

}

export default BookingPage;