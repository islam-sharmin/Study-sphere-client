import { useEffect, useState } from "react";


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [])

    return (
        <div>
            <h2>Assignments: {assignments.length}</h2>
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
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
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