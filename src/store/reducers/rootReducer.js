import authReducer from './authReducer'
import betReducer from './betReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  bet: betReducer
});

export default rootReducer

// the key name will be the data property on the state object