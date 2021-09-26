import { combineReducers } from 'redux'
import { taskReducer } from './Todo/reducers'

export default combineReducers({
     tasks: taskReducer
 })