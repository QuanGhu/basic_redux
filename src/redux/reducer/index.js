import { combineReducers } from 'redux'
import text from './text'

const IndexReducer = combineReducers ({
    text : text
})

export default IndexReducer