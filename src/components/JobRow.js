import React from 'react'
import {Link} from 'react-router-dom';

const JobRow = ({job, id}) =>
    <div className="list-group-item">
        <Link to={`/positions/${id}`}>
            {job}
        </Link>
    </div>

export default JobRow;