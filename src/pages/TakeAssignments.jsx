import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const TakeAssignments = () => {

    const {user} = useContext(AuthContext);

    const handleTask = event => {
        event.preventDefault();
        const form = event.target;
        const link = form.link.value;
        const note = form.note.value;
        const email = user?.email;
        const name = user?.displayName;
        const status = 'pending';

        const task = {link, note, email, name, status}
        console.log(task);

        // send data to the server
        fetch('http://localhost:5000/quiz', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                      })
                }
            })
        form.reset();
    }

    return (
        <div>
            <h2 className="mt-8 underline text-yellow-600 font-bold text-2xl text-center">Take Assignment</h2>
            <form onSubmit={handleTask}>
                <div className="form-control flex-1">
                    <label className="label">
                        <span className="label-text font-semibold text-yellow-600">PDF/Doc Link:</span>
                    </label>
                    <input name="link" type="text" placeholder="PDF/Doc Link" className="input input-bordered" required />
                </div>
                <div className="form-control flex-1">
                    <label className="label">
                        <span className="label-text font-semibold text-yellow-600">Title</span>
                    </label>
                    <textarea name="note" rows="4" cols="50" className="input input-bordered" placeholder="Quick note" required></textarea>
                </div>
                <div className="form-control mt-6">
                        <input type="submit" className="btn text-black bg-yellow-500" value="SUBMIT TASK" />
                    </div>
            </form>
        </div>
    );
};

export default TakeAssignments;