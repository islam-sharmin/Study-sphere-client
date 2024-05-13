import { useEffect, useState } from "react";


const PendingAssignment = () => {

    const [pendingAssignments, setPendingAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/quiz')
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
                                <td className="btn bg-yellow-500 text-black">Give Mark</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignment;