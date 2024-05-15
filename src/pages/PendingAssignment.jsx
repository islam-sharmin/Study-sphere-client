import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PendingAssignment = () => {

    const [pendingAssignments, setPendingAssignments] = useState([]);

    useEffect(() => {
        fetch('https://study-sphere-server-nine.vercel.app/quiz')
            .then(res => res.json())
            .then(data => setPendingAssignments(data))
    }, [])

    return (
        <div>
            <h2 className="mt-8 mb-4 underline text-yellow-600 font-bold text-2xl text-center">Pending Assignments</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Marks</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingAssignments.map(pendingAssignment => <tr key={pendingAssignment._id}>
                                <td>{pendingAssignment.title}</td>
                                <td>{pendingAssignment.marks}</td>
                                <td>{pendingAssignment.name}</td>
                                <Link to={`/submittedAssignment/${pendingAssignment._id}`}><td className="btn bg-yellow-500 text-black mt-2 mb-2">Give Mark</td></Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignment;