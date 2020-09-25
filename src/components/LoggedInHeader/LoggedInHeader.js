import React, { useContext, useState } from 'react';
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../resources/LogoBlack.png'
import './LoggedInHeader.css'
import { useHistory, useLocation } from 'react-router-dom';
import {UserContext} from '../../App'
import { handleSignOut, initializeLoginFramework } from '../Login/LoginManager';
import { MDBCol } from "mdbreact";


const LoggedInHeader = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })

    
    initializeLoginFramework();

    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }

    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    } 

    return (
        <div className="header">
            <Container>
            <Row>
                <Col>
                    <Navbar expand="lg">
                    <Link className="login-head-logo" to="/home"> <img src={logo} alt=""/> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <MDBCol md="6">
                  <input className="form-control" type="text" placeholder="Search your Destination..." aria-label="Search" />
                    </MDBCol>
                        <Nav className="ml-auto">
                        <Link className="login-head-menu" to="/news">News</Link>
                        <Link className="login-head-menu" to="/destination">Destination</Link>
                        <Link className="login-head-menu" to="/blog">Blog</Link>
                        <Link className="login-head-menu" to="/contact">Contact</Link>
                        <button onClick={signOut} className="login-head-button" type="submit">Log Out</button>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default LoggedInHeader;