import React, { useState, useEffect } from 'react';
import { Button, Navbar, Card, Container, Row, Col } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';



function Abody(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary">Click here</Button>
      <Container>
        <Row>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
              <Button variant="primary" >Go somewhere</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>

        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}

export default Abody; 
