import React from 'react';
import bg from './bg.png';
import sajek from '../../photos/Image/Sajek.png';
import sreemongol from '../../photos/Image/Sreemongol.png';
import sundorbon from '../../photos/Image/sundorbon.png';

import './Nav.css';
import {Col,Row,Card,CardDeck} from 'react-bootstrap';

const Nav = () => {
    return (
        
           <div className="bg" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})`}}>
            <div className= "container first">
            <Row>
            <Col md={3}>
            <div className="title ">
            <h1>COX'S BAZAR</h1><br></br>
           <p><h4>Cox's Bazar is the longest sea becah in the world.please visit this city.Thank you</h4></p> 
            </div>
           </Col>
           <Col md={9}>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={sajek} />
                <Card.Body>
                <Card.Title>Srimangal</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={sundorbon} />
                <Card.Body>
                <Card.Title>Sajek</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={sreemongol} />
                <Card.Body>
                <Card.Title>Cox's Bazar</Card.Title>
                </Card.Body>
            </Card>
        </CardDeck>
        </Col>
        </Row>
            </div>
           
            </div>

       
       );
};

export default Nav;