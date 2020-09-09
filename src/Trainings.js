import React, {useState} from 'react';

import web from './assets/web.jpg';
import ai from './assets/ai.jpg';
import cp from './assets/cp.png';
import android from './assets/android.jpeg';
import mlh from './assets/mlh.jpg';
import security from './assets/security.png';
import iot from './assets/iot.jpeg';


const  Trainings =(props) => {
    
    return (
      <div>
      
      <div style={{borderBottom:"ridge"}}>
        <h2 className='title'>Trainings</h2>
        <hr/>
        <p className='sub-title'>Trainings provided by Karunya Hacks in various technology domains.</p>
        </div>
        <hr/>
        <div className="container">
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <img src={web} width='350px'></img>
        {/* <Car style={{width:"100px", height:"100px"}}/> */}
        </div>
        <div className='offset-1 col-10 col-md-5'>
       <h3 className='sub-title' style={{fontSize:"50px"}}>Web Development</h3> 

<hr/>
        </div>
        
        </div>
        <div className="row" style={{margin:"50px"}}>
        
        <div className='offset-1 col-10 col-md-5'>
        
        <h3 className='sub-title' style={{fontSize:"50px"}}>Machine Learning and AI</h3>

<hr/>
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <img src={ai} width='350px'></img>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <img src={cp} width='350px'></img>
        
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <h3 className='sub-title' style={{fontSize:"50px"}}>Competitive Programming</h3>

<hr/>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <h3 className='sub-title' style={{fontSize:"50px"}}>Android Development</h3>

<hr/>
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <img src={android} width='350px'></img>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <img src={security} width='350px'></img>
        
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <h3>Cyber Security</h3>

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
        <img src={security} width='350px'></img>
        </div>

        </div>
        <div className="row" style={{margin:"50px"}}>
        <div className='offset-1 col-10 col-md-5'>
        <img src={iot} width='350px'></img>
        </div>
        <div className='offset-1 col-10 col-md-5'>
        <p><h3>Internet of Things</h3>
        
</p>
<hr/>
        </div>

        </div>
        </div>
        <div>
          <hr/>
        </div>
      </div>
    );

}
export default Trainings;