
const initialState = {
    turn: -1,
    player1: [],
    player2: []
}

export const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case 'TOGGLE_TURN':
            return {
                ...state,
                turn: -state.turn
            }
        default:
            return state
    }
}

export default reducer