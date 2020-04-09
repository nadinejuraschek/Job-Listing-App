// REACT
import React from 'react';

const JobBoard = ({ job }) => {
    return (
        <div>
            <h1 className="text-3xl">{job.company}</h1>
        </div>
    );
};

export default JobBoard;