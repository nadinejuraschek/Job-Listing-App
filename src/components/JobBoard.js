// REACT
import React from 'react';

const JobBoard = ({ job: {logo, company, position, postedAt, contract, location, languages, tools} }) => {
    const languagesTools = [];

    if (languages) {
        languagesTools.push(...languages);
    }
    if (tools) {
        languagesTools.push(...tools);
    }

    return (
        <div className="flex bg-white shadow-md m-4 p-4">
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-base text-teal-500">{company}</h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-700">
                    {postedAt} &#183; {contract} &#183; {location}
                </p>
            </div>
            <div className="flex items-center ml-auto">
                {
                    languagesTools 
                    ? languagesTools.map((item, index) => <span key={index} className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">{item}</span>) 
                    : ''
                }
            </div>
        </div>
    );
};

export default JobBoard;