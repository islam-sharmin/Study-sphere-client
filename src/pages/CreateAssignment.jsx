import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const CreateAssignment = () => {

    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(null);

    const handleCreateAssignment = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const level = form.level.value;
        const marks = form.marks.value;
        const date = form.date.value;
        const photo = form.photo.value;
        const email = user?.email;

        const newAssignment = { title, description, level, marks, date, photo, email }
        console.log(newAssignment);

        // send data to the server
        fetch('https://study-sphere-server-nine.vercel.app/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                      })
                }
            })
        form.reset();
    }

    return (
        <div>
            <h2 className="mt-8 underline text-yellow-600 font-bold text-2xl text-center">Create Assignment</h2>
            <div className="card shrink-0 w-full bg-base-100">
                <form onSubmit={handleCreateAssignment} className="card-body">
                    {/* title description */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">Title</span>
                        </label>
                        <input name="title" type="text" placeholder="Assignment Title" className="input input-bordered" required />
                    </div>

                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">Description</span>
                        </label>
                        <input name="description" type="text" placeholder="Assignment Description" className="input input-bordered" required />
                    </div>


                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* level marks and date */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold text-yellow-600">Assignment difficulty Level</span>
                            </label>
                            <select name="level" type="text" className="select select-bordered join-item input " required>
                                <option disabled selected >level</option>
                                <option>easy</option>
                                <option>medium</option>
                                <option>hard</option>
                            </select>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold text-yellow-600">Marks</span>
                            </label>
                            <input name="marks" type="text" placeholder="Marks" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold text-yellow-600">Due Date</span>
                            </label>
                            <label className="input input-bordered relative" required>
                                <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                                <span className="absolute top-4 right-2">
                                <FaRegCalendarAlt />
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* image url */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">Thumbnail Image URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Image URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn text-black bg-yellow-500" value="CREATE ASSIGNMENT" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;