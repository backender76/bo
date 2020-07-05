import {combineReducers} from 'redux'
import {exampleReducer} from './example'

const reducer = combineReducers({
  example: exampleReducer,
})

export {reducer}
