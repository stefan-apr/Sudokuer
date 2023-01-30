import React, { useState, useEffect, useRef } from 'react';
import { UserContext } from "../../contexts/user.jsx";

//Import CSS
import { Container, Row, Col, Button } from 'react-bootstrap';
import './puzzle.css';

//Import components
import Prebuilts from './prebuilts.js';

function Puzzle() {
  const solution = useRef(Prebuilts[0].prebuilts[0].initialValues);
  const [solutionState, setSolutionState] = useState(Prebuilts[0].prebuilts[0].initialValues);
  const correctAnswer = useRef(Prebuilts[0].prebuilts[0].solution);
  const selectedCells = useRef([]);
  const [shiftHeld, setShiftHeld] = useState(false);
  const [state, dispatch] = React.useContext(UserContext);

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  //The types in the solution should probably be 'preset', 'val', 'corner', and 'center'
  
  function downHandler(event) {
    if (event.key === 'Shift') {
      setShiftHeld(true);
    } 
    let strippedCode = event.code.replace(/\D/g,'');
    if(['1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(strippedCode) !== -1) {
      let newSolution = [...solution.current];
      let newType = 'val';
      if(event.shiftKey) {
        newType = 'corner';
      } else if(event.ctrlKey) {
        newType = 'center';
        event.stopPropagation();
        event.preventDefault();
      }
      
      for(let i = 0; i < selectedCells.current.length; i++) {
        let curCell = newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1];
        let oldType = null;
        let oldKey = '';
        if(curCell) {
          oldType = curCell.type;
          oldKey = curCell.value;
        }
        
        if(newType === 'val' && oldType !== 'preset') {
          newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = 
            {type: 'val', value: parseInt(strippedCode)};
        } else if(oldType === newType) {
          if(oldKey.includes(strippedCode)) {
            oldKey = oldKey.replace(strippedCode, '');
            newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = 
              {type: oldType, value: oldKey.trim()};
          } else {
            newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = 
              {type: oldType, value: (oldKey + ' ' + strippedCode).trim()};
          }
        } else if(oldType !== 'preset') {
          newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = 
            {type: newType, value: strippedCode.trim()};
        }
      }

      solution.current = newSolution;
      setSolutionState(newSolution);

      let proposedSolved = true;
      for(let i = 0; i < correctAnswer.current.length; i++) {
        for(let j = 0; j < correctAnswer.current[i].length; j++) {
          console.log(correctAnswer.current[i][j]);
          console.log(solution.current[i][j]);
          if(solution.current[i][j].type !== 'preset' && solution.current[i][j].type !== 'val') {
            proposedSolved = false;
            break;
          } else {
            if(solution.current[i][j].type === 'val') {
              if(solution.current[i][j].value !== correctAnswer.current[i][j]) {
                proposedSolved = false;
                break;
              }
            }
          }
        }
        if(!proposedSolved) {
          break;
        }
      }

      if(proposedSolved) {
        dispatch({type: "solved_puzzle", payload: true});
      } else {
        dispatch({type: "solved_puzzle", payload: false});
      }
      
    } else if(event.key === 'Escape' || event.key === 'Backspace') {
      let newSolution = [...solution.current];

      for(let i = 0; i < selectedCells.current.length; i++) {
        let curCell = newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1];
        let oldType = null;
        if(curCell) {
          oldType = curCell.type;
        }

        if(oldType !== null && oldType !== 'preset') {
          newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = null;
        }
      }
      solution.current = newSolution;
      setSolutionState(newSolution);
    }
  }

  function upHandler({key}) {
    if (key === 'Shift') {
      setShiftHeld(false);
    }
  }

  return (
    <Container className='puzzleContainer'>
      <Row className="spacer">
      </Row>
      <Row>
        <Col className="puzzleGrid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, i) => {
            return(
              <Row 
                className={row % 3 === 1 
                  ? 'top-border' 
                  : row % 9 === 0 
                    ? 'bottom-border' 
                    : ''}
                key={'puz_row_' + row}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((col, i) => {
                  let cellData = 
                    solutionState[row - 1] 
                      ? solutionState[row - 1][col - 1]
                        ? solutionState[row - 1][col - 1]
                        : null
                      : null
                
                  let selectedThis = state.selected.some((selectedCell) => {
                    return selectedCell.row === row && selectedCell.col === col
                  });
                
                  let classStr = 'val';
                  if(cellData) {
                    classStr = cellData.type;
                  }

                  if(selectedThis) {
                    classStr += ' candidate';
                  } else {
                    classStr += ' cell';
                  }

                  if(col % 3 === 1) {
                    classStr += ' left-border';
                  } else if(col % 9 === 0) {
                    classStr += ' right-border';
                  }
                
                  return (
                    <Col 
                      className={classStr}
                      key={'puz_col_' + col}
                      id={'' + row + '_' + col}
                      onClick={() => 
                        {
                          if(state.selected.length === 0) {
                            dispatch({type: "update_selected", payload: [...state.selected, {row: row, col: col}]});
                            selectedCells.current = [...state.selected, {row: row, col: col}];
                          } else if(shiftHeld) {
                            if(selectedThis) {
                              let newSelected = [...state.selected];
                              for(let i = 0; i < newSelected.length; i++) {
                                if(newSelected[i].row === row && newSelected[i].col === col) {
                                  newSelected.splice(i, 1);
                                }
                              }
                              dispatch({type: "update_selected", payload: [...newSelected]});
                              selectedCells.current = [...newSelected];
                            } else {
                              dispatch({type: "update_selected", payload: [...state.selected, {row: row, col: col}]});
                              selectedCells.current = [...state.selected, {row: row, col: col}];
                            }
                          } else {
                            dispatch({type: "update_selected", payload: [...[], {row: row, col: col}]});
                            selectedCells.current = [...[], {row: row, col: col}];
                          }
                        }
                      }
                    >
                      {cellData ? cellData.value : ''}
                    </Col>
                  )
                })}
              </Row>
            )
          })}
        </Col>
      </Row>
      <br />
      <Row>
        <Col className='rulesTemp'>
          <p>Normal sudoku rules apply.</p>
          <p>(All cells must be filled. Each row, column, and 3x3 box must               contain the numbers 1-9 exactly once each.)</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Puzzle;
