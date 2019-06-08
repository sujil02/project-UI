import React from 'react'
import {Link} from 'react-router-dom';

const JobRow = ({job, id, findJobById, jobs}) =>
    <div className="list-group-item">
        <Link onClick={() => findJobById(id, jobs)}
            to={{pathname: `/positions/${id}`,
                }
        }>
            {job}
        </Link>
    </div>

export default JobRow;