import { createStore } from 'redux'
import noteReducer from '../reducers/noteReducer'
let store = createStore(noteReducer)

export default store