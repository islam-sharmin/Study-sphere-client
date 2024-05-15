import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SubmittedAssignment = () => {

    const assignments = useLoaderData();
    console.log(assignments);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const link = form.link.value;
        const note = form.note.value;
        const obtainMarks = form.obtainMarks.value;
        const feedback = form.feedback.value;
        const status = 'completed';

        const submitAssignment = { link, note, obtainMarks, feedback, status }
        console.log(submitAssignment);

        // send data to the server
        fetch(`http://localhost:5000/quiz/${assignments._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Give Assignment Marks Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                      })
                }
                navigate('/pending');
            })
    }

    return (
        <div>
            <h2 className="mt-8 underline text-yellow-600 font-bold text-2xl text-center">Submit Assignment</h2>
            <div className="card shrink-0 w-full bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    {/* title description */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">PDF/DOC Link</span>
                        </label>
                        <input name="link" type="text" value={assignments.link} className="input input-bordered" required />
                    </div>

                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">Quick Note</span>
                        </label>
                        <input name="note" type="text" value={assignments.note} className="input input-bordered" required />
                    </div>

                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">Marks</span>
                        </label>
                        <input name="obtainMarks" type="text" placeholder="give marks" className="input input-bordered" required />
                    </div>

                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">Feedback</span>
                        </label>
                        <input name="feedback" type="text" placeholder="write a feedback" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn text-black bg-yellow-500" value="SUBMIT" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmittedAssignment;