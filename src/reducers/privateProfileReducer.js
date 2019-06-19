
const privateProfileReducer = (state = {user: {} , tab : 'PROFILE' ,
                                        savedGitJobs: [] ,
                                        allAddedJobs: [] ,
                                        followedStudents : [],
                                        followingStudents : [],
                                        markedStudents : []}, action) => {
    switch(action.type){

        case 'UPDATE_USER':
        case 'SAVE_USER':
            return{
                user:  action.user,
                tab: action.tab
            };
        case 'SAVED_GIT_JOBS':
            return{
                savedGitJobs : action.savedGitJobs,
                tab:  action.tab,
                user: action.user

            };
        case 'ALL_ADDED_JOBS':
            return{
                allAddedJobs : action.allAddedJobs,
                tab:  action.tab,
                user: action.user

            };

        case 'FOLLOWED_STUDENT':
            return{
                followedStudents : action.followedStudents,
                tab:  action.tab,
                user: action.user

            };

        case 'FOLLOWING_STUDENT':
            return{
                followingStudents : action.followingStudents,
                tab:  action.tab,
                user: action.user

            };
        case 'MARKED_STUDENTS':
            return{
                markedStudents : action.markedStudents,
                tab:  action.tab,
                user: action.user

            };
        case 'CHANGED_TAB':
            return{
                // savedGitJobs : action.savedGitJobs,
                tab:  action.tab,
                user: action.user

            };




        default:
            return state;
    }
}

export default privateProfileReducer;