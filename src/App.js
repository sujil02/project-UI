import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/JobSearch'
import JobSearch from "./components/JobSearch";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
// import '../node_modules/bootstrap/js/dist/collapse.js';
import JobBoard from './components/JobBoard'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import mainReducer from './reducers/JobBoardReducer';
import JobBoardContainer from './container/JobBoardContainer';
import HomePage from "./components/HomePage";

const store = createStore(mainReducer);

function App() {
  return (
      <div>
      {/*<HomePage />*/}
      <Provider store={store}>
        <JobBoardContainer />
      </Provider>
      </div>
  );
}

export default App;
