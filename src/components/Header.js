import React, { useState, useEffect } from 'react';
import { Button, Navbar, Card, Container, Row, Col } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';




function Header(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (<div>
        <Navbar bg='primary' variant="dark">
            <Navbar.Brand href="#home">Grocery Cart</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#signin" onClick={handleShow}>Sign in</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Navbar.Text>
                <Navbar.Text>
                    &nbsp;&nbsp;&nbsp;
                    New to Grocery Cart&nbsp;
    <a href="#signup">Sign Up</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </div>

    )
}

export default Header;
