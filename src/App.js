import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/JobSearch'
import JobSearch from "./components/JobSearch";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import JobBoard from './components/JobBoard'

function App() {
  return (
    <JobBoard />
  );
}

export default App;
