import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../../photos/Logo1.png';
import './Header.css';

const Header = () => {
    return (
        <div>
          <Navbar bg="black" variant="light">
          <Navbar.Brand href="#home"> <img className="header" src={logo1} alt="logo"/></Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="#features">Destination</Nav.Link>
          <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
          <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Log in</Button>
          </Form>
         </Navbar>
       </div> 
      
    );
};

export default Header;