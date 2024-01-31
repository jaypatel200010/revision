/*
// https://react-bootstrap.netlify.app/ 

The best way to consume React-Bootstrap is via the npm package which you can install with 
npm (or yarn if you prefer).

npm install react-bootstrap bootstrap

*/

import React from "react";
import Button from "react-bootstrap/Button";

import {
  Table,
  Alert,
  Accordion,
  Badge,
  Breadcrumb,
  ButtonGroup,
  Card,
  Carousel,
  Dropdown,
  Figure,
  ListGroup,
  Modal,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

function Boostrap_comp() {
  return (
    <div>
      <h1>Boostrap_comp</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
      <hr />
      <Alert variant="primary">This is a primary alert—check it out!</Alert>
      {[
        "primary",
        "info",
        "light",
        "secondary",
        "success",
        "warning",
        "danger",
      ].map((variant) => {
        return (
          <Alert variant={variant}>This is a primary alert—check it out!</Alert>
        );
      })}
      <hr />
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Boostrap_comp;
