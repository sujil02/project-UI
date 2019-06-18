import jobReducer, * as FromJobReducer from './jobReducer'
import UserReducer, * as FromUser from './UserReducer'
import loginReducer from './loginReducer'
import {combineReducers} from "redux";
import privateProfileReducer from './privateProfileReducer'

export default combineReducers({
    jobReducer,
    UserReducer,
    loginReducer,
    privateProfileReducer,
})

 // export const selectIsUserLoggedIn = (state) =>
//     state.loginReducer.isUserLoggedIn;
//
