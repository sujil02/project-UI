import {connect} from 'react-redux'
import service from '../services/UserService'
import PrivateProfileComponent from "../components/PrivateProfileComponent";
const userService = service.getInstance();


const StateTOPropertyMapper = state => ({
    loggedInUser: state.loginReducer.user
});

const PrivateProfileContainer = connect(StateTOPropertyMapper,)(PrivateProfileComponent);

export default  PrivateProfileContainer;