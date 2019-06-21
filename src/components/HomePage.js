import React from 'react';
import {Link, Route} from 'react-router-dom';


export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <h1> This is the home page.</h1>

                <a href={`/index`}> Goto Search Page</a>


            </div>



        )
    }
}