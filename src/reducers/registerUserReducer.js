
const registerUserReducer = (state = {user:{}}, action) => {
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