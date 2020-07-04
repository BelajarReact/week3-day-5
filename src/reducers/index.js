import {combineReducers} from 'redux';
import counter from './counter'
import todos from './fetchtodo'

export default combineReducers({counter,todos});