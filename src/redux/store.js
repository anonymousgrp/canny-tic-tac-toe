import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {
    turn: -1
}

export default createStore(rootReducer, initialState)