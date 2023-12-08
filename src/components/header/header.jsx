import React, { useState, useEffect, useRef } from 'react';
import { UserContext } from "../../contexts/user.jsx";
import { useNavigate } from 'react-router-dom';

//Import CSS
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';

function Header() {
  const [state, dispatch] = React.useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Container className='headerContainer'>
    <Row>
      <Col id='back_button' className={state.local_nav === 'ruleset' ? 'hide' : ''}>
        <p><a className='hover' onClick={() => {
          dispatch({type: "local_nav", payload: 'ruleset'});
          dispatch({type: "selected_type", payload: ''});
          navigate('/puzzles');
        }}
        >{'< Back to ruleset select'}</a></p>
      </Col>
      <Col>Username | 0 | Logout</Col>
    </Row>
    </Container>
  );
}

export default Header;