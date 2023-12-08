import React, {useState}  from 'react';
import { UserProvider, UserContext } from "./contexts/user.jsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Import CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

//Import components
import Puzzle from '/src/components/puzzle/puzzle.jsx';
import Controls from '/src/components/control_console/controls.jsx';
import Header from '/src/components/header/header.jsx';

import PuzzleSelect from '/src/components/puzzle_select/puzzle_select.jsx';

function App() {  

  const [selectedPuzzle, setSelectedPuzzle] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});
  const [solutionStack, setSolutionStack] = useState([]);
  const [solutionStackIndex, setSolutionStackIndex] = useState(1);
  const [clickedUndoRedo, setClickedUndoRedo] = useState(false);

  return (
    <UserProvider>
      <main>
        <Router>
          <Routes>
            <Route path='/puzzle' element={
              <Container>
                <Row>
                  <Col><Header></Header></Col>
                </Row>
                <Row>
                  <Col className='col-8'><Puzzle 
                    initialPuzzle={selectedPuzzle} 
                    solutionStack={solutionStack} 
                    solutionStackIndex={solutionStackIndex}
                    setSolutionStack={setSolutionStack}
                    setSolutionStackIndex={setSolutionStackIndex}
                    selectedType={selectedType}
                    clickedUndoRedo={clickedUndoRedo}
                    setClickedUndoRedo={setClickedUndoRedo}
                    key={solutionStackIndex}
                  ></Puzzle></Col>
                  <Col className='col-4'><Controls
                    solutionStack={solutionStack} 
                    solutionStackIndex={solutionStackIndex}
                    setSolutionStack={setSolutionStack}
                    setSolutionStackIndex={setSolutionStackIndex}
                    setClickedUndoRedo={setClickedUndoRedo}
                  ></Controls></Col>
                </Row>
              </Container>
            }
            ></Route>
            <Route path='/' element={'landing'}></Route>
            <Route path='/puzzles' element={
              <Container>
                <Row>
                  <Col><Header></Header></Col>
                </Row>
                <Row>
                <PuzzleSelect selectPuzzle={setSelectedPuzzle} selectType={setSelectedType}></PuzzleSelect>
                </Row>
              </Container>
            }
            ></Route>
          </Routes>
        </Router>
      </main>
    </UserProvider>
  );
}

export default App;