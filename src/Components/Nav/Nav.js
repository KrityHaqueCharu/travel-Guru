import React from 'react';
import bg from './bg.png';
import sajek from '../../photos/Image/Sajek.png';
import sreemongol from '../../photos/Image/Sreemongol.png';
import sundorbon from '../../photos/Image/sundorbon.png';
import './Nav.css';
import {Col,Row,Card,CardDeck} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CoxBazar = () => {
    return (
        
           <div className="bg" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})`}}>
            <div className= "container first">
            <Row>
            <Col md={3}>
            <div className="title ">
            <h1>Travel Guru</h1><br></br>
           <p><h4>We are a trusted travel agency with. Trust us and visit us.thanks</h4></p> 
            </div>
           </Col>
           <Col md={9}>
        <CardDeck>
           
            <Card className="hov">
                <Card.Img variant="top" src={sajek} />
                <Card.Body>
                <Card.Title>Sajek</Card.Title>
                </Card.Body>
                <Link to={"/sajek"}>See More</Link>
            </Card>
            
            <Card  className="hov">
                <Card.Img variant="top" src={sundorbon} />
                <Card.Body>
                <Card.Title>Sundorbon</Card.Title>
                </Card.Body>
                <Link to={"/sundorbon"}>See More</Link>
            </Card>
            
            <Card  className="hov">
                <Card.Img variant="top" src={sreemongol} />
                <Card.Body>
                <Card.Title>Cox's Bazar</Card.Title>
                </Card.Body>
                <Link to={"/coxsBazar"}>See More</Link>
            </Card>
           
        </CardDeck>
        </Col>
        </Row>
            </div>
           
            </div>

       
       );
};

export default CoxBazar;