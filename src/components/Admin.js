import React from 'react'


export default class Admin
    extends React.Component {
    constructor(props) { super(props);


    }

    componentWillMount() {

        this.props.getAllUsers()
    }


    // deleteCourse = (id) =>
    // {
    //
    //     courseService.deleteCourse(id).then(response => this.setState(
    //         { courses : response}
    //     ))
    //
    // }

    // createCourse = (course) =>
    // {
    //
    //     courseService.addCourse(course).then(response => this.setState(
    //         { courses : response}
    //     ))
    // }


    // componentWillMount() {
    //     courseService.findAllCourses().then( response =>
    //         this.setState({
    //             courses : response
    //         }))
    // }

    render() {
        return (
            <div>

                <table className="table table-fixed">
                    <thead className="thead-light">
                    <tr>
                        <th className='w-auto'></th>
                        <th className='w-auto'></th>

                        <th className='w-auto'></th>
                        <th className="w-25">&nbsp; &nbsp; &nbsp;Name</th>
                        <th className='w-auto'></th>
                        <th className='w-auto'></th>
                        <th className='w-auto'></th>
                        <th className="w-auto">&nbsp; &nbsp; &nbsp;</th>
                        <th className='w-auto'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Delete</th>

                        <th className="w-auto">&nbsp;



                            <button className="btn fas fa-sort-alpha-up"></button>

                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                </table>
                <div >
                    <div className= "container">
                        <table className="table table-fixed">
                            <thead className="thead-light">
                            <tr className='d-none'>
                                <th className="w-50">Title</th>
                                <th className="w-25">OwnedBy</th>
                                <th className="w-25">Last modified by</th>
                                <th >Delete </th>
                            </tr>
                            </thead>
                            <tbody className= "container">


                            {
                                this.props.users.length > 0 &&
                                this.props.users.filter(u => u.firstName !== "Github").map((user) =>
                                    <tr>
                                        <td className="w-25">

                                                <button className="btn fas fa-file-alt">

                                                </button>
                                                {user.firstName} {user.lastName}

                                        </td>
                                        <td className="w-25"></td>
                                        <td className="w-25"></td>
                                        <td> <button className="btn fa fa-trash" onClick={() => this.props.deleteUsers(user.id, this.props.users)}> </button></td>
                                    </tr>)
                            }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}