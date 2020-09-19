import React from 'react';
import bg from '../../Components/Nav/bg.png';
import sajek from '../../photos/Image/Sajek.png';
import sreemongol from '../../photos/Image/Sreemongol.png';
import sundorbon from '../../photos/Image/sundorbon.png';
import {Col,Row,Card,CardDeck, Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Sajek = () => {
    return (
        <div className="bg" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})`}}>
        <div className= "container first">
        <Row>
        <Col md={3}>
        <div className="title ">
        <h1>Sajek</h1><br></br>
       <p><h4> Sajek is a good place to visit in spring.Mountains are everywhere to pleased you and heal you</h4></p> 
       <Button> Booking</Button>
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

export default Sajek;