// REACT
import React from 'react';

const JobBoard = ({ job: {logo, company, position, postedAt, contract, location, languages, tools, isNew, featured, role, level} }) => {
    const tags = [role, level];

    if (languages) {
        tags.push(...languages);
    }
    if (tools) {
        tags.push(...tools);
    }

    return (
        <div className={`flex flex-col bg-white shadow-md m-4 p-6 rounded ${
            featured && "border-l-4 border-teal-500 border-solid"
        }`}>
            <div>
                <img className="w-20 h-20" src={logo} alt={company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-base text-teal-500">
                    {company}
                    {isNew && (<span className="text-teal-100 bg-teal-500 font-bold m-2 py-1 px-2 rounded-full">New!</span>)}
                    {featured && (<span className="text-white bg-gray-800 font-bold m-2 py-1 px-2 rounded-full">Featured</span>)}
                </h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-700">
                    {postedAt} &#183; {contract} &#183; {location}
                </p>
            </div>
            <div className="flex items-center ml-auto">
                {
                    tags 
                    ? tags.map((tag, index) => <span key={index} className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">{tag}</span>) 
                    : ''
                }
            </div>
        </div>
    );
};

export default JobBoard;