import React from 'react'
import SearchFields from "./SearchFields";

export default class JobSearchContainer extends React.Component{
    render(){
        return(
            <div>
            <div className="jumbotron bg-info">
                    <h1>Job Search - Prototype</h1>
            </div>
                <div className="row justify-content-center">
                    <SearchFields  />
                </div>
            </div>

        )
    }
}