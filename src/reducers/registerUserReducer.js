
const registerUserReducer = (state = {user:{skills:"", role:"NONE"}}, action) => {
    switch(action.type){

        case 'UPDATE_USER':
        case 'SAVE_USER':
            return{
                user:  action.user
            };
        default:
            return state;
    }
}

export default registerUserReducer;