import { useEffect, useState } from "react";


const Features = () => {

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [])

    return (
        <div className="mt-14">
            <div className='text-center mb-14'>
            <h2 className='text-4xl font-bold text-yellow-600 mb-2'>Our Features</h2>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    assignments?.slice(0, 6).map(assignment => <div key={assignment._id}>
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
                                    <button className="btn btn-success text-white">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;