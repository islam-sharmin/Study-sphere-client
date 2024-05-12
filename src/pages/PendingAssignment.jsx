import { useEffect, useState } from "react";


const PendingAssignment = () => {

    const [pendingAssignments, setPendingAssignments] = useState([]);
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/quiz')
            .then(res => res.json())
            .then(data => setPendingAssignments(data))
    }, [])

    return (
        <div>
            <h2>Pending Assignments:{pendingAssignments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingAssignments.map(pendingAssignment => <tr key={pendingAssignment._id}>
                                <th>{pendingAssignment.title}</th>
                                <td>{assignments.title}</td>
                                <td>{pendingAssignment.name}</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignment;