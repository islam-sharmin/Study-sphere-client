import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AttemptAssignment = () => {

    const { user } = useContext(AuthContext);
    const [assignments, setAssignments] = useState([]);

    const url = `http://localhost:5000/quizAttempt?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [url]);

    return (
        <div>
            <h2>Attempted Assignment: {assignments.length}</h2>
            <div>
                {
                    assignments.map(assignment => <div key={assignment._id}>
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src={assignment.photo} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{assignment.title}</h2>
                                <p>Status: {assignment.status}</p>
                                <div>
                                <p>Assignment Marks: {assignment.marks}</p>
                                <p>Obtained Marks: {assignment.obtainMarks}</p>
                                </div>
                                <p>Feedback: {assignment.feedback}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AttemptAssignment;