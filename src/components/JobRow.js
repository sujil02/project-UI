import React from 'react'
import {Link} from 'react-router-dom';

const JobRow = ({skill, loc, jobs , findJobById}) =>


    <div>
    {
        jobs.length > 0 &&
        jobs.map((posting,index) =>

            <li className="list-group-item" key={index}>
                <Link
                    to={{
                        pathname: `/jobs/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/positions/${posting.id}`,
                    }}
                    onClick={() => findJobById(posting.id, jobs)}

                      >
                    {posting.title}
                </Link>
            </li>)
    }
    </div>

export default JobRow;