import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Events from './Events';
import Trainings from './Trainings';
import Sponsers from './Sponsers';
import Contact from './Contact';


import './App.css';
import NavBar from './Navbar';
function App() {
  return (
    <div className="App">
          {/* <NavBar/> */}
       
          <div id="home"><Home/></div>
          <div id="about"><About/></div>
          <div id="events"><Events/></div>
          <div id="trainings"><Trainings/></div>
          <div id="sponsers"><Sponsers/></div>
          <div id="contact"><Contact/></div>
          {/* <Rules/> */}
      
    </div>
  );
}

export default App;
