import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Accordion, Card, Button} from 'react-bootstrap';
import {SocialMediaIconsReact} from 'social-media-icons-react';

const  Contact =(props) => {
    
    return (
      <>
      <h2>Contact us</h2>
      <div style={{backgroundColor:"#42275a", color:"white"}}>
      
      <div style={{marginTop:"40px"}}>
        
        <h2 style={{padding:"30px"}}>Frequently Asked Questions</h2>
        <p>Some of the Frequently Asked Questions here for you!</p>
        <Accordion>
          <Card style={{backgroundColor:"#42275a", color:"white"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
              How is KarunyaHacks beneficial?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>It provides students a chance to explore their technical Skills.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{backgroundColor:"#42275a", color:"white"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
              How often does karunyaHacks host events?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>We host two events very month.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{backgroundColor:"#42275a", color:"white"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
              What should I bring?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>All participants are requested to bring their personal laptop and any related.</Card.Body>
            </Accordion.Collapse>
          </Card>
          
          <Card style={{backgroundColor:"#42275a", color:"white"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Is coding experince required?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Ofcourse not! All students who want to learn about technology,design and building innovative products are welcome.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{backgroundColor:"#42275a", color:"white"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
              5) I have another question?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>Not a problem,shoot us an email at khacks@karunya.edu.in and we will get back with you ASAP.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div style={{padding:"30px"}}>
        <SocialMediaIconsReact icon="twitter" url="https://twitter.com/karunyahacks"/>
        <SocialMediaIconsReact icon="facebook" url="https://www.facebook.com/karunyahacks/"/>
        <SocialMediaIconsReact icon="instagram" url="https://www.instagram.com/karunyahacks/"/>
        <br/>
        <br/>
        <div>© KarunyaHacks. All rights reserved | Design: KarunyaHacks</div>
        </div>
        </div>
        <br/>
        
      </div>
      </>
    );

}
export default Contact;