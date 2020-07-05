import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import thunk from 'redux-thunk'
import {api} from './middlewares/api'
import {logging} from './middlewares/logging'

const enhancer = applyMiddleware(thunk, api, logging)

export const store = createStore(reducer, enhancer)
