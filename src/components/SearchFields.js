import React from 'react';
import JobRow from './JobRow'

export default class SearchFields extends React.Component{

    constructor(props) {
        super(props);
        this.handleChangeJobTitle = this.handleChangeJobTitle.bind(this);
        this.handleChangeJobLocation = this.handleChangeJobLocation.bind(this);
        this.state={
            job: '',
            location:'',
            postings:[]
        }
    }


    handleChangeJobTitle(event){
        this.setState({
            job: event.target.value
        })

    }

    handleChangeJobLocation(event){
        this.setState({
            location: event.target.value
        })

    }




    render(){
        return(
            <div className="justify-content-center">
                    <div className="form-group">
                        <label htmlFor="job-title">
                            Job Skill
                        </label>
                        <input type="input" className="form-control" id="job-title"
                        onChange={this.handleChangeJobTitle} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="job-location">
                            Preferred Location
                        </label>
                        <input type="input" className="form-control" id="job-location"
                        onChange={this.handleChangeJobLocation}/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-block btn-success" onClick={() => {this.props.findAllJobsbyDescriptionAndLocation(this.state.job, this.state.location);console.log(this.props.findAllJobsbyDescriptionAndLocation(this.state.job, this.state.location))}}>
                            Search Jobs
                        </button>
                    </div>

                    <div className="list-group">
                        { this.props.jobs.length >0  &&
                            this.props.jobs.map( posting =>
                                <JobRow job={posting.title}
                                        id={posting.id}
                                        key={posting.id}
                                        findJobById={this.props.findJobById}/>)
                        }
                    </div>
            </div>
        )
    }
}