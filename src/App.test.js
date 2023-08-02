import { render, screen,fireEvent,waitFor,wait } from '@testing-library/react';
import { BrowserRouter,Router } from 'react-router-dom';
import App from './App';
import BookingPage from './views/BookingPage';

jest.setTimeout(20000);


describe("Booking Form", () => {


test('test home page loaded properly', () => {
  
  const titleText = "Little Lemon";
  const sectionText1 = "Specials";
  const sectionText2 = "Testimonials";
  const sectionText3 = "About";

 
  render( 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  );


  const titleElement = screen.getByText(titleText);
  const sectionElement1 = screen.getAllByText(sectionText1);  //return array[]
  const sectionElement2 = screen.getAllByText(sectionText2);
  const sectionElement3 = screen.getAllByText(sectionText3);
  expect(titleElement).toBeInTheDocument();
  expect(sectionElement1).toHaveLength(3)
  expect(sectionElement2).toHaveLength(3);
  expect(sectionElement3).toHaveLength(3);
  
});


test('test booking page loaded properly', () => {
  
  const titleText = "New booking";

  render( 
    <BrowserRouter>
    <BookingPage />
    </BrowserRouter>
  );


  const titleElement = screen.getByText(titleText);
  expect(titleElement).toBeInTheDocument();
  
});




test('test initializeTimes', async () => {
  const labelBookingDate = "Booking date*";
  const labelBookingTime = "Booking time*";
  const timeSlotHave1 = "17:00";
  const timeSlotHave2 = "18:00";
  const timeSlotHave3 = "18:30";
  const timeSlotHave4 = "20:30";

  const timeSlotNotHave = "23:00";
  const testBookingDate = "2023-07-27"

  render(
    <BrowserRouter>
    <BookingPage />
    </BrowserRouter>
  );

  
  const bookingDateElement = screen.getByLabelText(labelBookingDate);
  expect(bookingDateElement).toBeInTheDocument();

  fireEvent.change(bookingDateElement, {target: {value: testBookingDate} }); 
  
  const bookingTimeElement = screen.getByLabelText(labelBookingTime);
  fireEvent.click(bookingTimeElement);
  
  //need this to wait for booking time option to be filled //pause for 2sec
  await new Promise((r) => setTimeout(r, 2000));

  screen.debug();
  const bookingTimeSlotHaveElement1 = screen.queryByText(timeSlotHave1);
  expect(bookingTimeSlotHaveElement1).toBeInTheDocument();
  const bookingTimeSlotHaveElement2 = screen.queryByText(timeSlotHave2);
  expect(bookingTimeSlotHaveElement2).toBeInTheDocument();
  const bookingTimeSlotHaveElement3 = screen.queryByText(timeSlotHave3);
  expect(bookingTimeSlotHaveElement3).toBeInTheDocument();
  const bookingTimeSlotHaveElement4 = screen.queryByText(timeSlotHave4);
  expect(bookingTimeSlotHaveElement4).toBeInTheDocument();

  const bookingTimeSlotNotHaveElement = screen.queryByText(timeSlotNotHave);
  expect(bookingTimeSlotNotHaveElement).not.toBeInTheDocument();
  //expect(bookingTimeSlotNotHaveElement).toBeNull();

});

test('test successful booking form submission', async () => {
  

  render( 
    <BrowserRouter>
    <BookingPage />
    </BrowserRouter>
  );

  //test booking page loaded
  const titleText = "New booking";
  const titleElement = screen.getByText(titleText);
  expect(titleElement).toBeInTheDocument();

  //fill up the form
  const labelBookingDate = "Booking date*";
  const labelBookingTime = "Booking time*";
  const labelNumOfDiners = "Number of diners*";
  const labelOccasion = "Occasion";
  const labelComments = "Comments";
  const labelFirstName = "First name*";
  const labelLastName = "Last name*";
  const labelEmail = "Email*";
  const labelContact = "Contact*";
  
  
  //test data
  const bookingDate = '2023-07-27';
  const bookingTime = '18:00';
  const numDiners = 5;
  const occasion = "Birthday";
  const comments = "Hello";
  const firstName = "Soon Yee";
  const lastName = "Sian";
  const email = "soonyee80@gmail.com";
  const contact = "94564710";

  //get the input elements
  const inputBookingDateElement = screen.queryByLabelText(labelBookingDate);
  const inputBookingTimeElement = screen.queryByLabelText(labelBookingTime);
  const inputNumOfDinersElement = screen.queryByLabelText(labelNumOfDiners);
  const inputOccasionElement = screen.queryByLabelText(labelOccasion);
  const inputCommentsElement = screen.queryByLabelText(labelComments);
  const inputFirstNameElement = screen.queryByLabelText(labelFirstName);
  const inputLastNameElement = screen.queryByLabelText(labelLastName);
  const inputEmailElement = screen.queryByLabelText(labelEmail);
  const inputContactElement = screen.queryByLabelText(labelContact);

  //input the test values
  fireEvent.focus(inputBookingDateElement);
  fireEvent.change(inputBookingDateElement, {target: {value: bookingDate} }); 

  await new Promise((r) => setTimeout(r, 5000));//wait 5 sec
   
  fireEvent.focus(inputBookingTimeElement);
  fireEvent.change(inputBookingTimeElement, {target: {value: bookingTime} });
  
  fireEvent.focus(inputNumOfDinersElement);
  fireEvent.change(inputNumOfDinersElement, {target: {value: numDiners} });

  fireEvent.focus(inputOccasionElement);
  fireEvent.change(inputOccasionElement, {target: {value: occasion} });

  fireEvent.focus(inputCommentsElement);
  fireEvent.change(inputCommentsElement, {target: {value: comments} });

  fireEvent.focus(inputFirstNameElement);
  fireEvent.change(inputFirstNameElement, {target: {value: firstName} });

  fireEvent.focus(inputLastNameElement);
  fireEvent.change(inputLastNameElement, {target: {value: lastName} });

  fireEvent.focus(inputEmailElement);
  fireEvent.change(inputEmailElement, {target: {value: email} });

  fireEvent.focus(inputContactElement);
  fireEvent.change(inputContactElement, {target: {value: contact} });

  //await new Promise((r) => setTimeout(r, 5000));
  //screen.debug();

  expect(screen.queryByDisplayValue(bookingDate)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(bookingTime)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(numDiners)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(occasion)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(comments)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(firstName)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(lastName)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(email)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(contact)).toBeInTheDocument();

  //submit 
  const submitButton = screen.getByText(/Reserve now/i);      
  fireEvent.focus(submitButton);
  fireEvent.click(submitButton); 


   await new Promise((r) => setTimeout(r, 5000));//wait 5 sec

  //screen.debug();

  //verify 
  const successLabel = "Successful Reservation";
  //const successElement = screen.queryByText(successLabel);
  //expect(successElement).toBeInTheDocument();
  /*await waitFor(() => {
    expect(screen.queryByDisplayValue(successLabel)).toBeInTheDocument();
  });*/

  expect(screen.queryByText(successLabel)).toBeInTheDocument();

  
});




test('test failed booking form submission', async () => {
  

  render( 
    <BrowserRouter>
    <BookingPage />
    </BrowserRouter>
  );

  //test booking page loaded
  const titleText = "New booking";
  const titleElement = screen.getByText(titleText);
  expect(titleElement).toBeInTheDocument();

  //fill up the form
  const labelBookingDate = "Booking date*";
  const labelBookingTime = "Booking time*";
  const labelNumOfDiners = "Number of diners*";
  const labelOccasion = "Occasion";
  const labelComments = "Comments";
  const labelFirstName = "First name*";
  const labelLastName = "Last name*";
  const labelEmail = "Email*";
  const labelContact = "Contact*";
  
  
  //test data
  const bookingDate = ""
  const bookingTime = "";
  const numDiners = 11;
  const occasion = "";
  const comments ="qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
  const firstName = "wtesttesttesttesttesttest";
  const lastName =  "wtesttesttesttesttesttest";
  const email = "soonyee80gmail.com";
  const contact = "945647101w";

  /*const bookingDate = "2023-07-27"
  const bookingTime = "18:00";
  const numDiners = 5;
  const occassion = "Birthday";
  const comments = "Hello";
  const firstName = "Soon Yee";
  const lastName = "Sian";
  const email = "soonyee80@gmail.com";
  const contact = "94564710";*/

   //get the input elements
   const inputBookingDateElement = screen.queryByLabelText(labelBookingDate);
   const inputBookingTimeElement = screen.queryByLabelText(labelBookingTime);
   const inputNumOfDinersElement = screen.queryByLabelText(labelNumOfDiners);
   const inputOccasionElement = screen.queryByLabelText(labelOccasion);
   const inputCommentsElement = screen.queryByLabelText(labelComments);
   const inputFirstNameElement = screen.queryByLabelText(labelFirstName);
   const inputLastNameElement = screen.queryByLabelText(labelLastName);
   const inputEmailElement = screen.queryByLabelText(labelEmail);
   const inputContactElement = screen.queryByLabelText(labelContact);
 
   //input the test values
   fireEvent.focus(inputBookingDateElement);
   fireEvent.change(inputBookingDateElement, {target: {value: bookingDate} }); 
 
   await new Promise((r) => setTimeout(r, 5000));
    
   fireEvent.focus(inputBookingTimeElement);
   fireEvent.change(inputBookingTimeElement, {target: {value: bookingTime} });
   
   fireEvent.focus(inputNumOfDinersElement);
   fireEvent.change(inputNumOfDinersElement, {target: {value: numDiners} });
 
   fireEvent.focus(inputOccasionElement);
   fireEvent.change(inputOccasionElement, {target: {value: occasion} });
 
   fireEvent.focus(inputCommentsElement);
   fireEvent.change(inputCommentsElement, {target: {value: comments} });
 
   fireEvent.focus(inputFirstNameElement);
   fireEvent.change(inputFirstNameElement, {target: {value: firstName} });
 
   fireEvent.focus(inputLastNameElement);
   fireEvent.change(inputLastNameElement, {target: {value: lastName} });
 
   fireEvent.focus(inputEmailElement);
   fireEvent.change(inputEmailElement, {target: {value: email} });
 
   fireEvent.focus(inputContactElement);
   fireEvent.change(inputContactElement, {target: {value: contact} });
 

  //submit 
  const submitButton = screen.getByText(/Reserve now/i);      
  fireEvent.focus(submitButton);
  fireEvent.click(submitButton); 

   await new Promise((r) => setTimeout(r, 2000)); //wait 2s
   
  //error label
  const errorText1 = "Required";
  //const errorText2 = "Min 1 diner";
  //const errorText3 = "Max 10 diners";
  const errorText4 = "Must be 100 characters or less";
  const errorText5 = "Must be 20 characters or less";
  const errorText6 = "Invalid email address";
 // const errorText7 = "The field should have digits only";
  const errorText8 = "Must be 8 digit phone number";

  //screen.debug();
  const errorTextElement1 = screen.queryAllByText(errorText1);
  //const errorTextElement2 = screen.queryByText(errorText2);
  //const errorTextElement3 = screen.queryByText(errorText3);
  const errorTextElement4 = screen.queryByText(errorText4);
  const errorTextElement5 = screen.queryAllByText(errorText5);
  const errorTextElement6 = screen.queryByText(errorText6);
  //const errorTextElement7 = screen.queryByText(errorText7);
  const errorTextElement8 = screen.queryByText(errorText8);
  expect(errorTextElement1).toHaveLength(3);      //3 required error
  //expect(errorTextElement2).toBeInTheDocument();
  //expect(errorTextElement3).toBeInTheDocument();
  expect(errorTextElement4).toBeInTheDocument();
  expect(errorTextElement5).toHaveLength(2);
  expect(errorTextElement6).toBeInTheDocument();
  //expect(errorTextElement7).toBeInTheDocument();
  expect(errorTextElement8).toBeInTheDocument();

  
});




/*
test('test got booking details from storage', async () => {
  

  

  render( 
    <BrowserRouter>
    <BookingPage />
    </BrowserRouter>
  );

  //test booking page loaded
  const titleText = "New booking";
  const titleElement = screen.getByText(titleText);
  expect(titleElement).toBeInTheDocument();

  //fill up the form
  const labelBookingDate = "Booking date*";
  const labelBookingTime = "Booking time*";
  const labelNumOfDiners = "Num of diners*";
  const labelOccasion = "Occasion";
  const labelComments = "Comments";
  const labelFirstName = "First name*";
  const labelLastName = "Last name*";
  const labelEmail = "Email*";
  const labelContact = "Contact*";
  
  
  //test data
  const bookingDate = "2023-07-27"
  const bookingTime = "18:00";
  const numDiners = 5;
  const occassion = "Birthday";
  const comments = "Hello";
  const firstName = "Soon Yee";
  const lastName = "Sian";
  const email = "soonyee80@gmail.com";
  const contact = "94564710";
  
  //submit 
  const submitButton = screen.getByText(/Reserve now/i);      
  fireEvent.click(submitButton); 

   //need this to wait for booking time option to be filled //pause for 2sec
   await new Promise((r) => setTimeout(r, 2000));
   
  //verify 
  const successLabel = "Successful Reservation";
  
  const successElement = screen.queryByText(successLabel);
  expect(successElement).toBeInTheDocument();

  //click ok button
  const textBtnOk = "OK";
  const btnOkElement = screen.queryByText(textBtnOk);
  expect(btnOkElement).toBeInTheDocument();

  fireEvent.click(btnOkElement); 

  //need this to wait for booking time option to be filled //pause for 2sec
  await new Promise((r) => setTimeout(r, 5000));
  
  screen.debug();

  const textBookedDateTime = "2023-07-27 , 18:00"
  const bookedDateTimeElement = screen.queryByText(textBookedDateTime);
  expect(bookedDateTimeElement).toBeInTheDocument();
  
});*/









});
