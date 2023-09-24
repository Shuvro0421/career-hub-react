import React from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../Utility/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('you have applied successfully');
    }

    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-xl font-bold text-center">Job Details</h2>
                    <div className="space-y-8">
                        <h2><span className="font-bold">Job Description :</span> {job.job_description}</h2>
                        <h2><span className="font-bold">Job Responsibility :</span> {job.job_responsibility}</h2>
                        <h2><span className="font-bold">Educational Requirements:</span>{job.educational_requirements}</h2>
                        <h2><span className="font-bold">Experiences:</span>{job.experiences}</h2>
                    </div>
                </div>
                <div className="border ">
                    <h2 className="text-2xl">Side Things</h2>
                    <button onClick={handleApplyJob}  className="btn bg-gradient-to-r from-blue-400 to-purple-600 w-full text-white">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;