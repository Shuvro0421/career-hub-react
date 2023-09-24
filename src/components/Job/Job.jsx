import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { id , logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact border-2  p-8">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold  border rounded border-[#7E90FE] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 ">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-4">
                    <h2 className="flex items-center gap-1"><CiLocationOn className="text-[#7E90FE] text-2xl"></CiLocationOn> {location}</h2>
                    <h2 className="flex items-center"><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>{salary}</h2>
                </div>
                <div className="card-action">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-blue-400 to-purple-600 text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;