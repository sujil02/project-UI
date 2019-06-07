import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import jobReducer from '../reducers/jobReducer';
import JobContainer from "../container/JobContainer";

const store = createStore(jobReducer);

export default class JobBoard extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <JobContainer />
            </Provider>
        );
    };
};