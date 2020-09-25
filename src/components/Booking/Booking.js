import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Home from '../Home/Home';
import './Booking.css'

const Booking = () => {
    const {bookingId} = useParams();

    const url = fakeData;

    const placeDetails = url.filter(place => place.id == bookingId)
    const {name, description} = placeDetails[0];   

    return (
        <div>
            <Home/>
            <Container className="booking">
            <Row>
                <Col className="place-part">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </Col>

                <Col xl={2}></Col>

                <Col className="form-part">
                    <Form>
                    <Form.Group>
                        <Form.Label>Origin</Form.Label>
                        <Form.Control style={{backgroundColor: 'rgba(230, 230, 230, 0.616)'}} type="text" placeholder="Dhaka" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Destination</Form.Label>
                        <Form.Control style={{backgroundColor: 'rgba(230, 230, 230, 0.616)'}} type="text" placeholder={name} />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>From</Form.Label>
                                <Form.Control style={{backgroundColor: 'rgba(230, 230, 230, 0.616)'}} type="date"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>To</Form.Label>
                                <Form.Control style={{backgroundColor: 'rgba(230, 230, 230, 0.616)'}} type="date"/>
                            </Form.Group>
                        </Col>
                    </Row>
                        <Link to="/destination"><button variant="primary" style={{width:'100%'}} type="submit" className="head-button">Booking Now</button></Link>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Booking;