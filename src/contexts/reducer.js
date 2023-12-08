export const reducer = (state, action) => {
  switch (action.type) {
    case "update_selected":
      return {
        ...state,
        selected: action.payload
      }
    case "latest_puzzle_state":
      return {
        ...state,
        latestPuzzleState: action.payload
      }
    case "solved_puzzle":
      return {
        ...state,
        solvedPuzzle: action.payload
      }
    case "shift_held":
      return {
        ...state,
        shiftHeld: action.payload
      }
    case "ctrl_held":
      return {
        ...state,
        ctrlHeld: action.payload
      }
    case "clear_puzzle":
      return {
        ...state,
        clearPuzzle: action.payload
      }
    case "local_nav":
      return {
        ...state,
        local_nav: action.payload
      }
    case "selected_type":
      return {
        ...state,
        selectedType: action.payload
      }

    default:
      return state
  }
}

export const initialState = {
  selected: [],
  latestPuzzleState: [],
  solvedPuzzle: false,
  shiftHeld: false,
  ctrlHeld: false,
  clearPuzzle: false,
  local_nav: 'ruleset',
  selectedType: ''
}