import './css/App.css';
import Main from "./views/Main.js"
import Nav from "./views/Nav.js"
import Footer from "./views/Footer.js"
import BookingPage from "./views/BookingPage";
import BookingConfirmation from "./views/BookingConfirmation";

import { Routes, Route} from "react-router-dom";



function App() {
  return (

    <div className="main-flex">
    
    <Nav></Nav>
  
   <Routes> 
    <Route path="/" element={<Main/>} ></Route>
    <Route path="home" element={<Main/>} ></Route>
    <Route path="/booking" element={<BookingPage />} ></Route>
    <Route path="/bookingConfirmation" element={<BookingConfirmation />} ></Route>
    </Routes>

    <Footer></Footer>

 
    </div>
   
   


   



  );
}

export default App;
