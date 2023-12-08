import React, { useState, useEffect, useRef } from 'react';
import { UserContext } from "../../contexts/user.jsx";

//Import CSS
import { Container, Row, Col } from 'react-bootstrap';
import './controls.css';

//Import components

function Controls(props) {
  const [state, dispatch] = React.useContext(UserContext);
  const [seconds, updateSeconds] = useState(0);
  const [initialTime, updateInitialTime] = useState(Date.now());
  const [secondsBeforePause, updateSecondsBeforePause] = useState(0);

  const getTime = () => {
    const time = Date.now() - initialTime;
    updateSeconds(Math.floor((time / 1000)));
  };

  useEffect(() => {
    if(!state.solvedPuzzle) {
      const interval = setInterval(() => getTime(), 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <Container className="controlsContainer">
      <Row className="row justify-content-md-center">
        <Col className="timerBlock">
          <h3>Timer:</h3>
          <p className={"timer" + (state.solvedPuzzle ? ' solved' : '')}>
            {
              Math.floor(seconds / 3600) < 10 
                ? '0' + Math.floor(seconds / 3600)
                : '' + Math.floor(seconds / 3600)
            }
            :
            {
              Math.floor((seconds % 3600) / 60) < 10 
                ? '0' + Math.floor((seconds % 3600) / 60)
                : '' + Math.floor((seconds % 3600) / 60)
            }
            :
            {
              seconds % 60 < 10 
                ? '0' + seconds % 60 
                : '' + seconds % 60
            }
          </p>
          <Row>
            <Col><button>Pause</button></Col>
            <Col><button onClick={() => {
              updateSeconds(0);
              updateInitialTime(Date.now());
              updateSecondsBeforePause(0);
            }}>Reset</button></Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className='buttons'>
          <Row>
            {['1', '2', '3'].map((cell, i) => {
              return(
                  <Col 
                    className={state.shiftHeld
                      ? "consoleCell space corner" 
                      : state.ctrlHeld 
                        ? "consoleCell space center"
                        : "consoleCell space val"
                    }
                    key={'cell_' + cell}
                    onClick={() => {
                      console.log(cell);
                    }}
                  >{cell}</Col>
              )
            })}
          </Row>
          <Row>
            {['4', '5', '6'].map((cell, i) => {
              return(
                  <Col 
                    className={state.shiftHeld
                      ? "consoleCell space corner" 
                      : state.ctrlHeld 
                        ? "consoleCell space center"
                        : "consoleCell space val"
                    }
                    key={'cell_' + cell}
                    onClick={() => {
                      console.log(cell);
                    }}
                  >{cell}</Col>
              )
            })}
          </Row>
          <Row>
              {['7', '8', '9'].map((cell, i) => {
                return(
                    <Col 
                      className={state.shiftHeld
                        ? "consoleCell space corner" 
                        : state.ctrlHeld 
                          ? "consoleCell space center"
                          : "consoleCell space val"
                      }
                      key={'cell_' + cell}
                      onClick={() => {
                        console.log(cell);
                      }}
                    >{cell}</Col>
                )
              })}
          </Row>
          </Col>
      </Row>
       <Row>
        <Col className="col-12 deleteBtn">Delete</Col>
      </Row>
      <br />
      <Row className="row justify-content-md-center">
        <Col className={!state.shiftHeld && !state.ctrlHeld ? 'col-4 pencilMarkBtn currentlySelected' : 'col-4 pencilMarkBtn'}>Value</Col>
        <Col className={state.shiftHeld ? 'col-4 pencilMarkBtn currentlySelected' : 'col-4 pencilMarkBtn'} id='corner'>Corner</Col>
        <Col className={state.ctrlHeld && !state.shiftHeld ? 'col-4 pencilMarkBtn currentlySelected' : 'col-4 pencilMarkBtn'}>Center</Col>
      </Row>
      <br />
      <Row>
        <Col className={props.solutionStackIndex > 1 ? 'col-5 undoredo' : 'col-5 undoredo greyed'}
          onClick={() => {
            if(props.solutionStackIndex > 1) {
              props.setSolutionStackIndex(props.solutionStackIndex - 1);
              props.setClickedUndoRedo(true);
            }
          }}
        >Undo</Col>
        <Col className='col-2'></Col>
        <Col className={props.solutionStackIndex < props.solutionStack.length ? 'col-5 undoredo' : 'col-5 undoredo greyed'}
          onClick={() => {
            if(props.solutionStackIndex < props.solutionStack.length) {
              props.setSolutionStackIndex(props.solutionStackIndex + 1);
              props.setClickedUndoRedo(true);
            }
          }}
        >Redo</Col>
      </Row>
      <br />
      <Row>
        <Col 
          className='col-12 clear'
          onClick={() => {
            dispatch({type: "clear_puzzle", payload: true});
          }}
        >Clear</Col>
      </Row>
      <br />
    </Container>
  );
}

export default Controls;