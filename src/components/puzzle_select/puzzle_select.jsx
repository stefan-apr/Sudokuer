import React, { useState, useEffect, useRef } from 'react';
import { UserContext } from "../../contexts/user.jsx";
import { useNavigate } from 'react-router-dom';

// Import CSS
import { Container, Row, Col, Button } from 'react-bootstrap';
import './puzzle_select.css';

// Import components
import Prebuilts from '../puzzle/prebuilts.js';

function PuzzleSelect(props) {
  const [state, dispatch] = React.useContext(UserContext);
  const [hovered, setHovered] = useState('');
  const [hoveredPuzz, setHoveredPuzz] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  return (
    <Container className='puzzleSelectContainer'>
      <Row className="spacer">
      </Row>
      <h2 id='puzz_select_header'>{state.selectedType === '' ? 'Choose your ruleset!' : 'Choose your puzzle!'}</h2><br />
      {
        state.selectedType === '' ?
          Prebuilts.map((p, i) => {
          return(
            p.prebuilts.length === 0 ? null : 
          <Row key={'puzzType_' + i}>
            <Col className={hovered === p.type ? 'puzzSelector hovered' : 'puzzSelector'} 
              onMouseOver={() => {setHovered(p.type);}} 
              onMouseOut={() => {setHovered('');}}
              onClick={() => {
                dispatch({type: "selected_type", payload: p.type});
                dispatch({type: "local_nav", payload: 'puzzle'});
              }}
            >
              <Row>
                <Col className='puzzName'>
                  {p.type.charAt(0).toUpperCase() + p.type.slice(1) + ' sudoku!'}
                </Col>
                <Col className='puzzRules'>
                  {p.description}
                </Col>
              </Row>
            </Col>
          </Row>
          )
          })
        : Prebuilts.map((p, i) => {
            if(p.type !== state.selectedType) {
              return '';
            } else {
              return (
                Prebuilts[i].prebuilts.map((puzz, j) => {
                  return (
                    <Row key={'puzzle_' + j} className={hoveredPuzz === j ? 'puzzSelector hovered' : 'puzzSelector'}
                      onMouseOver={() => {setHoveredPuzz(j);}} 
                      onMouseOut={() => {setHoveredPuzz(-1);}}
                      onClick={() => {
                        props.selectPuzzle(puzz);
                        props.selectType(Prebuilts[i]);
                        navigate('/puzzle');
                      }}
                    >
                      <Col>
                        <img src={`src\\assets\\` + p.type + '_' + j + '.PNG'} alt='puzzle_image'></img>
                      </Col>
                      <Col className={'compPercent'}><h3>0% complete</h3></Col>
                    </Row>
                  );
                })
              );
            }
          })
      }
    </Container>
  );
}

export default PuzzleSelect;
