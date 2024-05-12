import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);
    // const [selectedLevel, setSelectedLevel] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [])

    return (
        <div className="mt-6">
            <details className="dropdown mb-6">
                <summary className="m-1 btn bg-yellow-500 text-black">Level <FaChevronDown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Easy</a></li>
                    <li><a>Medium</a></li>
                    <li><a>Hard</a></li>
                </ul>
            </details>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    assignments.map(assignment => <div key={assignment._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-8 pt-8">
                                <img src={assignment.photo} alt="Shoes" className="rounded-xl h-52 w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{assignment.title}</h2>
                                <div className="flex gap-8">
                                    <p>Marks: {assignment.marks}</p>
                                    <p>Level: {assignment.level}</p>
                                </div>
                                <div className="card-actions gap-4 mt-3">
                                    <Link to={`/details/${assignment._id}`}><button className="btn btn-success text-white">Details</button></Link>
                                    <button className="btn btn-error text-white">Delete</button>
                                    <button className="btn btn-warning text-white">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Assignments;