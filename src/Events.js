import React, {useState} from 'react';

import alexa from './assets/alexa.jpg';
import tech from './assets/tech.jpg';
import docker from './assets/docker.jpg';
import python from './assets/python.jpg';
import mlh from './assets/mlh.jpg';
import cyber from './assets/cyber.jpg';
import ds from './assets/ds.jpg';
const  Events =(props) => {
    
    return (
      <div style={{}}>
        <h2 className="title">Past Events</h2>
        <hr/>
        <div className="container">
        <div className="row" style={{margin:"30px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <img src={alexa} width='350px'></img>
        {/* <Car style={{width:"100px", height:"100px"}}/> */}
        </div>
        <div className='offset-1 col-10 col-md-5'>
       <h3>HACKING WITH AMAZON ALEXA</h3> 
We have conducted Hacking with Amazon Alexa workshop in association with MLH Local Host continuously for the past two years.During this workshop participants will be taught the basics of how to build skills for Amazon Alexa to run on Alexa devices like the Amazon Tap or Echo.
<hr/>
        </div>
        
        </div>
        <div className="row" style={{margin:"50px"}}>
        
        <div className='offset-1 col-10 col-md-5'>
        
        <h3>HACK THE TECHNICAL INTERVIEW: ALGORITHMS PRACTICE</h3>
In association with MLH Local Host we conducted Hack the Technical Interview workshop.
During this workshop, students learned strategies to perform better in technical interviews.
<hr/>
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <img src={tech} width='350px'></img>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <img src={docker} width='350px'></img>
        
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <h3>INTRODUCTION TO DOCKER</h3>
During this workshop students were taught the basics of Docker and Software Containers. The workshop covered setting up Docker, running first container, creating a basic web application with Python and Docker, and how to push the Docker Image to DockerHub.
<hr/>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <h3>MLH LOCAL HACK DAY</h3>
A global hackathon and celebration of learning, building, and sharing!.The hackathon was coducted on 4th December 2018 and attendees were made to code a project for 12 hours.
<hr/>
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <img src={mlh} width='350px'></img>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <img src={python} width='350px'></img>
        
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <h3>PYTHON GUI</h3>
Conducted first self-hosted workshop on python using GUI using Tkinter and Django Web framework on 17th Dec 2018.
<hr/>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <h3>CYBER SECURITY WORKSHOP</h3>
KarunyaHacks organized a workshop on "Cyber Security" on 14th Feb lead by Mr. Sathish Kumar in Karunya Institute of Technology and Sciences
<hr/>
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <img src={cyber} width='350px'></img>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <img src={ds} width='350px'></img>
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <p><h3>PYTHON FOR DATA SCIENCE</h3>
Girls Wing of KarunyaHacks conducted a workshop on "Python for Data science" on 20th Feb in order to empower the girl community.The workshop was planned, organized and attended by girl students.</p>
<hr/>
        </div>

        </div>
        </div>
        
        <br/>
        
      </div>
    );

}
export default Events;