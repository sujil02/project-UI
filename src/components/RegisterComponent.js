import React from 'react';
import {Link} from 'react-router-dom';

const SKILLS = ["JAVA","PYTHON","RUBY","ANGULAR","REACT"];


class RegisterComponent extends React.Component {

    constructor(props){
        super(props);
    }

    handleSkills = (event, skills) => {
        let allSkills = skills;
       if (skills.includes(event.currentTarget.dataset.id)) {
           allSkills = skills.filter(skill => skill !== event.currentTarget.dataset.id)
       }else {
           allSkills.push(event.currentTarget.dataset.id)
       }
       return allSkills.toString();
    };

    getClass = (userSkills, skill) => {
        if (userSkills.includes(skill)){
            return "list-group-item active"
        }else{
            return "list-group-item"
        }
    };

    updateSkills = (event) => {
        this.setState({
            skills: event.target.value.toString()
        })
    }

    render() {
        return (
            <div>
                {console.log("REGISTER")}
                {console.log(this.props.user)}
                <div className="row justify-content-center">
                    <div className="card" style={{'width':'60%', 'marginTop':'3em', 'marginBottom':'3em'}}>
                        <div className="card-header">
                            <h4> Register </h4>
                        </div>
                        <div className="card-body">
                            <form className="form">
                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> First Name: </h5>
                                    </label>
                                    <div className="input-group">
                                        <input type="text" className="form-control"
                                               placeholder="First Name"
                                               onChange={(event) => this.props.updateUser(
                                                            { ...this.props.user,
                                                           firstName: event.target.value})}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> Last Name: </h5>
                                    </label>
                                    <div className="input-group">
                                        <input type="text" className="form-control"
                                               placeholder="Last Name"
                                               onChange={(event) => this.props.updateUser(
                                                       { ...this.props.user,
                                                           lastName: event.target.value})}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> Email: </h5>
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-at" /></div>
                                        </div>
                                        <input type="text" className="form-control"
                                               placeholder="Email"
                                               onChange={(event) => this.props.updateUser(
                                                       { ...this.props.user,
                                                           email: event.target.value})}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> Username: </h5>
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-this.props.user" /></div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Username"
                                               onChange={(event) => this.props.updateUser(
                                                       { ...this.props.user,
                                                           username: event.target.value})}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> Password: </h5>
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-lock" /></div>
                                        </div>
                                        <input type="password" className="form-control"
                                               placeholder="Password"
                                               onChange={(event) => this.props.updateUser(
                                                       { ...this.props.user,
                                                           password: event.target.value})}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> Role : </h5>
                                    </label>
                                    <div className="input-group">
                                        <select className="form-control"
                                                defaultValue="STUDENT"
                                                onChange={(event) => this.props.updateUser({
                                                        ...this.props.user,
                                                        role: event.target.value
                                                    })}>
                                                {/*value={this.props.user.role}>*/}
                                            <option value="STUDENT"> Student </option>
                                            <option value="RECRUITER"> Recruiter </option>
                                        </select>
                                    </div>
                                </div>




                                {
                                    this.props.user.role === "STUDENT" &&

                                    <div>
                                        <div className="form-group">
                                            <label className="col-form-label-sm">
                                                <h5> Major in: </h5>
                                            </label>
                                            <div className="input-group">
                                                <select className="form-control">
                                                    <option value="CS"> Computer Science </option>
                                                    <option value="IS"> Information Systems </option>
                                                    <option value="ECE"> Electrical Engineering </option>
                                                    <option value="DS"> Data Science </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label-sm">
                                                <h5> Qualification: </h5>
                                            </label>
                                            <div className="input-group">
                                                <select className="form-control"  placeholder="Select Role" >
                                                    <option value="GRADUATE"> Graduate </option>
                                                    <option value="BACHELOR"> Bachelor </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label-sm">
                                                <h5> University: </h5>
                                            </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fa fa-university"></i></div>
                                                </div>
                                                <input className="form-control"
                                                       placeholder="University"
                                                       onChange={(event) => this.props.updateUser(
                                                               { ...this.props.user,
                                                                   university: event.target.value})}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label-sm">
                                                <h5> GPA: </h5>
                                            </label>
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       placeholder="GPA"
                                                       onChange={(event) => this.props.updateUser(
                                                               { ...this.props.user,
                                                                   GPA: event.target.value})}/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-form-label-sm">
                                                <h5> LinkedIn: </h5>
                                            </label>
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       placeholder="LinkenIn URL"
                                                       onChange={(event) => this.props.updateUser(
                                                               { ...this.props.user,
                                                                   linked_in: event.target.value})}/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <h4>Skills</h4>
                                            <ul>
                                                {SKILLS.map(skill =>
                                                    <li className={this.getClass(this.props.user.skills,skill)} id={skill} data-id={skill}
                                                        onClick={(event) => this.props.updateUser({
                                                            ...this.props.user,
                                                            skills: this.handleSkills(event, this.props.user.skills.split(","))
                                                        })}>
                                                        {skill.toLocaleLowerCase()}
                                                    </li>

                                                )}
                                            </ul>
                                            <label className="col-form-label-sm">
                                                Add more skills...(Comma Separated Values)
                                            </label>
                                            <div className="form-inline">
                                                <input type="text" placeholder="CSS, C, C++..."
                                                       onChange={(event) => this.updateSkills(event)} className="form-control"/>
                                                {/*<button className="btn btn-outline-success"*/}
                                                {/*        onClick={() => this.props.updateUser({*/}
                                                {/*            ...this.props.user,*/}
                                                {/*            skills: this.props.user.skills.concat(",").concat(this.state.skills)*/}
                                                {/*        })}> Add skills </button>*/}
                                            </div>
                                        </div>
                                    </div>

                                }

                                {
                                    this.props.user.role === "RECRUITER" &&

                                    <div className="form-group">
                                        <label className="col-form-label-sm">
                                            <h5> Company: </h5>
                                        </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-this.props.user" /></div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Company Name"
                                                   onChange={(event) => this.props.updateUser(
                                                           { ...this.props.user,
                                                               company: event.target.value})}/>
                                        </div>
                                    </div>
                                }

                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="form-row">
                                <Link className="btn btn-success ml-1 mr-auto"
                                      onClick={() =>
                                            this.props.register({
                                                        ...this.props.user,
                                                        skills: this.props.user.skills.concat(",").concat(this.state.skills)
                                      })}
                                      to="/login">
                                    Register
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterComponent;