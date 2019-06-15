import jobReducer, * as FromJobReducer from './jobReducer'
import UserReducer, * as FromUser from './UserReducer'
import {combineReducers} from "redux";

export default combineReducers({
    jobReducer,
    UserReducer
})
