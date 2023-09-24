import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // not the best way
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-5xl text-center">Featured Jobs : {jobs.length}</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map((job, idx) => <Job key={idx} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'flex items-center justify-center my-5'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r
                 from-blue-400 to-purple-600  text-white">Show All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;