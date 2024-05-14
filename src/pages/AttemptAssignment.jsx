import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AttemptAssignment = () => {

    const { user } = useContext(AuthContext);
    const [assignments, setAssignments] = useState([]);
    
    const url = `http://localhost:5000/quizAttempt?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {credentials: 'include'})
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [url]);

    return (
        <div>
            <h2 className="mt-8 underline text-yellow-600 font-bold text-2xl text-center mb-8">Attempted Assignment</h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {
                    assignments.map(assignment => <div key={assignment._id}>
                        <div className="flex items-center gap-5 bg-base-100 shadow-xl">
                            <figure className="ml-5"><img src={assignment.photo} alt="Album" className="h-40 w-44" /></figure>
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