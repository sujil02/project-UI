import React from 'react'
import {Link} from 'react-router-dom';

const JobRow = ({job, id, findJobById}) =>
    <div className="list-group-item">
        <Link to={{pathname: `/positions/${id}`,
                    state:{job: findJobById(id)}}
        }>
            {job}
        </Link>
    </div>

export default JobRow;