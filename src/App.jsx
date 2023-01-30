import React from 'react';
import { UserProvider, UserContext } from "./contexts/user.jsx";

//Import CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

//Import components
import Puzzle from '/src/components/puzzle/puzzle.jsx';
import Controls from '/src/components/control_console/controls.jsx';
import Header from '/src/components/header/header.jsx';

function App() {  
  return (
    <UserProvider>
      <main>
        <Container>
          <Row>
            <Col><Header></Header></Col>
          </Row>
          <Row>
            <Col className='col-8'><Puzzle></Puzzle></Col>
            <Col className='col-4'><Controls></Controls></Col>
          </Row>
        </Container>
      </main>
    </UserProvider>
  );
}

export default App;