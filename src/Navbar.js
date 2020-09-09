import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import { Document, Page } from 'react-pdf';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import PDF from './assets/coc.pdf';
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    buttonLabel,
    className
  } = props;
  const toggle = () => setIsOpen(!isOpen);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  return (
    <div>
    <div>
      <Modal size="lg" isOpen={modal} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal}>Code of Conduct</ModalHeader>
        <ModalBody>
          <div>
          <iframe src={PDF} width="100%" height="500px">
    </iframe>

          </div>
        </ModalBody>
        
      </Modal>
    </div>
      <Navbar className="dummy" color="dark" light expand="md" dark fixed="top">
        <NavbarBrand href="/">KHacks</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="my-nav-link"><Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >HOME
            </Link>
            </NavLink>
              
            </NavItem>
            <NavItem>
            <NavLink className="my-nav-link"><Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >ABOUT
            </Link>
            </NavLink>
              
            </NavItem>
            <NavItem>
            <NavLink className="my-nav-link"><Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >PAST EVENTS
            </Link>
            </NavLink>
              
            </NavItem>
            <NavItem>
            <NavLink className="my-nav-link"><Link
              activeClass="active"
              to="trainings"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >TRAININGS
            </Link>
            </NavLink>
              
            </NavItem>
            <NavItem>
            <NavLink className="my-nav-link"><Link
              activeClass="active"
              to="sponsers"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >SPONSERS
            </Link>
            </NavLink>
              
            </NavItem>
            <NavItem>
            <NavLink className="my-nav-link"><Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >CONTACT
            </Link>
            </NavLink>
              
            </NavItem>
            <NavItem>
              <NavLink onClick={toggleModal} className='underline' href="#">RULES</NavLink>
            </NavItem>
            
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;