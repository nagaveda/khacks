import React, {useState} from 'react';

import znet from './assets/znet.png';
import sm from './assets/stickermule.png'
import gatsby from './assets/gatsby.png'
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const  Sponsers =(props) => {
    
    return (
      <div>
      
      <div style={{marginTop:"50px", borderBottom:"ridge"}}>
        <h1 style={{borderBottom:"ridge 2px"}}>Our Sponsers</h1>
        <div className="container">
          <div className="row">
            <div className="offset-1 col-10 col-sm-5">
              <a target="_blank" href="https://www.znetlive.com/"><img width="200px" height="180px" src={znet}></img></a>
              (cloud partner)
            </div>
            <div className="offset-1 col-10 col-sm-5">
              
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-10 col-sm-5">

            </div>
            <div className="offset-1 col-10 col-sm-5">
            <a target="_blank" href="https://www.stickermule.com/deals?ref_id=0535521701&utm_content=250x250&utm_medium=embed&utm_source=invite/"><img width="200px" height="180px" src={sm}></img></a>
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-10 col-sm-5">
            <a target="_blank" href="https://www.gatsbyjs.com/"><img width="200px" height="180px" src={gatsby}></img></a>
              <h1>Gatsby</h1>
            </div>
            <div className="offset-1 col-10 col-sm-5">
              
            </div>
          </div>
        </div>
        <h2 style={{marginBottom:"50px", marginTop:"100px"}}> WHY SPONSER US</h2>
        <ul>
          <li style={{textAlign:"left",margin:"20px 50px 20px 50px" }}>Demo your API during the event or showcase your hardware/devices enabling students to tinker and create, while also receiving invaluable feedback to further improve your product.</li>
          <li style={{textAlign:"left",margin:"20px 50px 20px 50px" }}>Showcasing your company brand during the Hackathon, allows you a better platform to broadcast your company stature, thus boosting brand recognition, hence encouraging students to know more about your company</li>
          <li style={{textAlign:"left",margin:"20px 50px 20px 50px" }}>Also we will promote your brand throughout our event through social media platforms and other platforms</li>
        </ul>
        <h1 style={{marginTop:"50px"}}>SPONSORSHIP TIERS<FontAwesomeIcon icon={faCoffee} /></h1>
        <Table hover>
      <thead>
        <tr>
          <th></th>
          <th>RS 5000</th>
          <th>RS 10000</th>
          <th>RS 15000</th>
          <th>RS 20000</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th>General</th>
          
        </tr>
        <tr>
          <th scope="row">Send Resource Person</th>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th scope="row">Get Hardware</th>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th scope="row">Sponsor Meal</th>
          <td></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th scope="row">Judges</th>
          <td></td>
          <td></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th scope="row">Guest House</th>
          <td></td>
          <td></td>
          <td></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th>Branding</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Website Logo</th>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th scope="row">Social Media</th>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th scope="row">Sponsorship Prizes And Swags	</th>
          <td></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th scope="row">Hacker Shirt logo	</th>
          <td></td>
          <td></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
        <tr>
          <th scope="row">Banners,Co-hosted by you</th>
          <td></td>
          <td></td>
          <td></td>
          <td><FontAwesomeIcon icon={faCheckCircle} /></td>
        </tr>
      </tbody>
    </Table>
        </div>
        <br/>
        
      </div>
    );

}
export default Sponsers;