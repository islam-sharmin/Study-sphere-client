import { useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";


const Assignments = () => {

    const { user } = useContext(AuthContext);
    const [assignments, setAssignments] = useState([]);

    const handleSort = (level) => {
        fetch(`https://study-sphere-server-nine.vercel.app/assignmentSort?level=${level}`)
            .then(res => res.json())
            .then(data => {
                setAssignments(data); // Update the assignments state with the sorted data
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle any errors here, such as displaying an error message to the user
            });
    }


    useEffect(() => {
        fetch('https://study-sphere-server-nine.vercel.app/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [])

    const handleDelete = (id, creatorEmail) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (user?.email === creatorEmail) {
                    fetch(`https://study-sphere-server-nine.vercel.app/myList/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "The assignment has been deleted successfully.",
                                    icon: "success"
                                });
                                // Update the UI by removing the deleted assignment
                                setAssignments(assignments.filter(assignment => assignment._id !== id));
                            }
                        })
                } else {
                    Swal.fire({
                        title: "Not Allowed",
                        text: "You are not allowed to delete this assignment.",
                        icon: "error"
                    });
                }
            }
        });
    }

    return (
        <div className="mt-6">
            <details className="dropdown mb-6">
                <summary className="m-1 btn bg-yellow-500 text-black">Level <FaChevronDown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><button onClick={() => handleSort('easy')}>easy</button></li>
                    <li><button onClick={() => handleSort('medium')}>medium</button></li>
                    <li><button onClick={() => handleSort('hard')}>hard</button></li>
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
                                    <button onClick={() => handleDelete(assignment._id, assignment.email)} className="btn btn-error text-white">Delete</button>
                                    <Link to={`/update/${assignment._id}`}><button className="btn btn-warning text-white">Update</button></Link>
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