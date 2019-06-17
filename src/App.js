import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/JobSearch'
import JobSearch from "./components/JobSearch";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import JobBoard from './components/JobBoard'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import mainReducer from './reducers/JobBoardReducer';
import JobBoardContainer from './container/JobBoardContainer';

const store = createStore(mainReducer);

function App() {
  return (
      <Provider store={store}>
        <JobBoardContainer />
      </Provider>
  );
}

export default App;
