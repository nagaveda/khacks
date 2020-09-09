import React, {useState} from 'react';
import Logo from './assets/logo.png';
import Car from './ImageCarousel';
import Navbar from './Navbar';
const  Header =(props) => {
    
    return (
      <div style={{marginTop:"50px",backgroundImage: "linear-gradient(#42275a, #734b6d)"}}>
      <Navbar/>
      <img style={{marginTop:"50px", width:"150px", height:"150px"}} src={Logo}></img>
      
      <div>
      <h1 class='title1' style={{color: "silver"}}>Karunya Hacks</h1>
      </div>
        <p class='sub-title' style={{color: "silver"}}>KarunyaHacks is a student hacking community which is affiliated to
        Karunya Institute of Technology and Sciences.</p>
        <br/>
        <Car/>
      </div>
    );

}
export default Header;