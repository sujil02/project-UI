import jobReducer, * as FromJobReducer from './jobReducer'
import UserReducer, * as FromUser from './UserReducer'
import loginReducer from './loginReducer'
import {combineReducers} from "redux";

export default combineReducers({
    jobReducer,
    UserReducer,
    loginReducer
})

 // export const selectIsUserLoggedIn = (state) =>
 //     state.loginReducer.isUserLoggedIn;
 //
