import React, { useState, useEffect, useRef } from 'react';
import { UserContext } from "../../contexts/user.jsx";

//Import CSS
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <Container className='headerContainer'>
    <Row>
      <Col>Username | 0 | Logout</Col>
    </Row>
    </Container>
  );
}

export default Header;