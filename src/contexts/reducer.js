export const reducer = (state, action) => {
  switch (action.type) {
    case "update_selected":
      return {
        ...state,
        selected: action.payload
      }
    case "update_puzzle":
      return {
        ...state,
        puzzle: action.payload
      }
    case "solved_puzzle":
      return {
        ...state,
        solvedPuzzle: action.payload
      }

    default:
      return state
  }
}

export const initialState = {
  selected: [],
  puzzle: [],
  solvedPuzzle: false
}