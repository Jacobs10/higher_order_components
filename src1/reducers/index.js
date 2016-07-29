import { combineReducers } from 'redux'
import AuthReducer from './authentication'

const rootReducer = combineReducers({
  authenticated: AuthReducer
})

export default rootReducer
