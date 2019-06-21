import React from 'react'
import {Link} from 'react-router-dom';

// const JobRow = ({skill, loc, jobs , findJobById}) =>
//
//
//     <div>
//     {
//         jobs.length > 0 &&
//         jobs.map((posting,index) =>
//
//             <li className="list-group-item" key={index}>
//                 <Link
//                     to={{
//                         pathname: `/jobs/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/positions/${posting.id}`,
//                     }}
//                     onClick={() => findJobById(posting.id, jobs)}
//
//                       >
//                     {posting.title}
//                 </Link>
//             </li>)
//     }
//     </div>
//
// export default JobRow;




export default class JobBoard extends React.Component{

    constructor(props) {
        super(props);
    }



    get_Row = () =>
{
    if (this.props.user_logged_in){
        return (
            this.props.jobs.length > 0 &&
            this.props.jobs.map((posting,index) =>

                <li className="list-group-item" key={index}>
                <Link
                to={
                     `/search/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/positions/${posting.id}`
                }
                onClick={() => this.props.findJobById(posting.id, this.props.jobs)}

            >
                {posting.title}
            </Link>
                </li>

        ))
    }
    else{
        return (
            this.props.jobs.length > 0 &&
            this.props.jobs.map((posting,index) =>

                <li className="list-group-item" key={index}>
                    <Link to={{
                        pathname: '/login',
                        state: {
                            message: true
                        }}}>
                        {posting.title}
                    </Link>
                </li>

            ))

    }}

    render(){
    return(
        <div>
            {
                this.get_Row()
            }
        </div>
    )}
}





//
//
// const get_Row = ({user_logged_in, posting, jobs, findJobById}) =>
// {
//     if (user_logged_in){
//         return (
//             <Link
//                 to={{
//                     pathname: `/jobs/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/positions/${posting.id}`,
//                 }}
//                 onClick={() => findJobById(posting.id, jobs)}
//
//             >
//                 {posting.title}
//             </Link>
//         )
//     }
//     else{
//         return (
//             <Link
//                 to={{
//                     pathname: `/login`,
//                 }}>
//                 {"hi"}
//             </Link>
//         )
//
//
//     }}
//
// const JobRow = ({skill, loc, jobs , findJobById, user_logged_in}) =>
//
//
//     <div>
//         {
//             jobs.length > 0 &&
//             jobs.map((posting,index) =>
//
//                 <li className="list-group-item" key={index}>
//
//                     {get_Row(user_logged_in, posting, jobs, findJobById)}
//                     {/*<Link*/}
//                     {/*    to={{*/}
//                     {/*        pathname: `/jobs/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/positions/${posting.id}`,*/}
//                     {/*    }}*/}
//                     {/*    onClick={() => findJobById(posting.id, jobs)}*/}
//
//                     {/*      >*/}
//                     {/*    {posting.title}*/}
//                     {/*</Link>*/}
//                 </li>)
//         }
//     </div>
//
// export default JobRow;