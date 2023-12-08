import React, { useState, useEffect, useRef } from 'react';
import { UserContext } from "../../contexts/user.jsx";

//Import CSS
import { Container, Row, Col, Button } from 'react-bootstrap';
import './puzzle.css';

//Import components
import Prebuilts from './prebuilts.js';
const constantPrebuilts = JSON.parse(JSON.stringify(Prebuilts));

function Puzzle(props) {
  const [startingPuzzle, setStartingPuzzle] = useState(JSON.parse(JSON.stringify(props.initialPuzzle.initialValues 
    ? props.initialPuzzle.initialValues 
    : constantPrebuilts[0].prebuilts[0].initialValues)));

  const [solution, setSolution] = useState(props.initialPuzzle.initialValues 
    ? props.initialPuzzle.initialValues 
    : Prebuilts[0].prebuilts[0].initialValues
  );

  const selectedCells = useRef([]);
  const [shiftHeld, setShiftHeld] = useState(false);
  const [mouseHeld, setMouseHeld] = useState(false);

  const [state, dispatch] = React.useContext(UserContext);

  useEffect(() => {
    if(props.clickedUndoRedo) {
      const newSolution = [...props.solutionStack[props.solutionStackIndex - 1]]
      setSolution(props.solutionStack[props.solutionStackIndex - 1]);
      props.setClickedUndoRedo(false);
    } 

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };
  }, []);

  function mouseDownHandler(event) {
    setMouseHeld(true);
  }

  function mouseUpHandler(event) {
    setMouseHeld(false);
  }

  //The types in the solution should be 'preset', 'val', 'corner', and 'center'
  function downHandler(event) {
    if (event.key === 'Shift') {
      setShiftHeld(true);
      dispatch({type: "shift_held", payload: true});
    } else if (event.key === 'Control') {
      dispatch({type: "ctrl_held", payload: true});
    }
    let strippedCode = event.code.replace(/\D/g,'');
    if(['1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(strippedCode) !== -1) {
      let newSolution = [...solution];
      let newType = 'val';
      if(event.shiftKey) {
        newType = 'corner';
      } else if(event.ctrlKey) {
        newType = 'center';
        event.stopPropagation();
        event.preventDefault();
      }
      
      let isDifferent = false;
      for(let i = 0; i < selectedCells.current.length; i++) {
        let curCell = newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1];
        let oldType = null;
        let oldKey = '';
        if(curCell) {
          oldType = curCell.type;
          oldKey = curCell.value;
        }
        
        if(newType === 'val' && oldType !== 'preset') {
          isDifferent = true;
          newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = 
            {type: 'val', value: parseInt(strippedCode)};
        } else if(oldType === newType) {
          if(oldKey.includes(strippedCode)) {
            isDifferent = true;
            oldKey = oldKey.replace(strippedCode, '');
            newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = 
              {type: oldType, value: oldKey.trim()};
          } else {
            isDifferent = true;
            newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = 
              {type: oldType, value: (oldKey + ' ' + strippedCode).trim()};
          }
        } else if(oldType !== 'preset') {
          isDifferent = true;
          newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = 
            {type: newType, value: strippedCode.trim()};
        }
      }

      setSolution([...newSolution]);

      if(isDifferent) {
        const newSolutionStack = [[...startingPuzzle]];
        for(let i = 1; i < props.solutionStackIndex; i++) {
          newSolutionStack.push([...props.solutionStack[i]]);
        }
        newSolutionStack.push([...newSolution]);
        props.setSolutionStack(JSON.parse(JSON.stringify(newSolutionStack)));
        props.setSolutionStackIndex(props.solutionStackIndex + 1);
      }

      let formattedSol = [[], [], [], [], [], [], [], [], []];
      let fullyFilled = true;
      for(let i = 0; i < solution.length; i++) {
        for (let j = 0; j < solution[0].length; j++) {
          let curVal = solution[i][j];
          if(curVal === null || curVal.type === 'corner' || curVal.type === 'center') {
            dispatch({type: "solved_puzzle", payload: false});
            fullyFilled = false;
            break;
          } else {
            formattedSol[i][j] = curVal.value;
          }
        }
        if(!fullyFilled) {
          break;
        }
      }

      if(fullyFilled) {
        fetch('http://localhost:5000/proxy', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"solution": formattedSol})
        }).then((response) => {
          return response.json();
        })
        .then((data) => {
          if(data) {
            dispatch({type: "solved_puzzle", payload: true});
          } else {
            dispatch({type: "solved_puzzle", payload: false});
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    } else if(event.key === 'Escape' || event.key === 'Backspace') {
      let newSolution = [...solution];
      let isDifferent = false;

      for(let i = 0; i < selectedCells.current.length; i++) {
        let curCell = newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1];
        let oldType = null;
        if(curCell) {
          oldType = curCell.type;
        }

        if(oldType !== null && oldType !== 'preset') {
          isDifferent = true;
          newSolution[selectedCells.current[i].row - 1][selectedCells.current[i].col - 1] = null;
        }
      }
      setSolution([...newSolution]);

      if(isDifferent) {
        const newSolutionStack = [[...startingPuzzle]];
        for(let i = 1; i < props.solutionStackIndex; i++) {
          newSolutionStack.push([...props.solutionStack[i]]);
        }
        newSolutionStack.push([...newSolution]);
        props.setSolutionStack(JSON.parse(JSON.stringify(newSolutionStack)));
        props.setSolutionStackIndex(props.solutionStackIndex + 1);
        dispatch({type: "solved_puzzle", payload: false});
      }
    }
  }

  function upHandler({key}) {
    if (key === 'Shift') {
      setShiftHeld(false);
      dispatch({type: "shift_held", payload: false});
    } else if (key === 'Control') {
      dispatch({type: "ctrl_held", payload: false});
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((col, j) => {
                  let cellData = 
                    solution[row - 1] 
                      ? solution[row - 1][col - 1]
                        ? solution[row - 1][col - 1]
                        : null
                      : null
                  let selectedThis = state.selected.some((selectedCell) => {
                    return selectedCell.row === row && selectedCell.col === col;
                  });

                  let isMagicSquareCell = false;
                  if(props.selectedType.type === 'magic square') {
                    props.initialPuzzle.magicSquares.map((s) => {
                      if(i - s.x <= 2 && i - s.x >= 0 && j - s.y <= 2 && j - s.y >= 0) {
                        isMagicSquareCell = true;
                      }
                    })
                  }
                
                  let classStr = 'val';
                  if(cellData) {
                    classStr = cellData.type;
                  }

                  if(selectedThis) {
                    classStr += ' candidate';
                  } else if(isMagicSquareCell) {
                    classStr += ' magic-square';
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
                      onMouseDown={() => 
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
                    onMouseOver={() => {
                        if(mouseHeld) {
                          dispatch({type: "update_selected", payload: [...state.selected, {row: row, col: col}]});
                          selectedCells.current = [...state.selected, {row: row, col: col}];
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
          {props.selectedType.rulesText ? props.selectedType.rulesText.map((r, i) => {
            return (
              <p key={'rulestext_' + i}>{r}</p>
            )
          })
          : (
          <div>
            <p>Normal sudoku rules apply.</p>
            <p>(All cells must be filled. Each row, column, and 3x3 box must contain the numbers 1-9 exactly once each.)</p>
          </div>
          )
          }
        </Col>
      </Row>
    </Container>
  );
}

export default Puzzle;
