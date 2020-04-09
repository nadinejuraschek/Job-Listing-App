// REACT
import React, { useState, useEffect } from 'react';

// COMPONENTS
import JobBoard from './components/JobBoard';

// DATA
import data from './assets/data.json';

function App() {
  const [ jobs, setJobs ]= useState([]);

  useEffect(() => {
    setJobs(data);
    // if there was an API
    // fetch('API_URL',)
    // .then((res) => res.json())
    // .then((data)=> {
    //   setJobs(data)
    // });
  }, []);

  console.log(jobs);

  return (
    <div>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map((job) => <JobBoard key={job.id} job={job} /> )
        )
      }
    </div>
  );
}

export default App;
