import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const [startDate, setStartDate] = useState(null);
    const update = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        setStartDate(update.date);
    }, [update.date])

    const handleUpdateAssignment = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const level = form.level.value;
        const marks = form.marks.value;
        const date = form.date.value;
        const photo = form.photo.value;

        const updateAssignment = { title, description, level, marks, date, photo }
        console.log(updateAssignment);

        // send data to the server
        fetch(`https://study-sphere-server-nine.vercel.app/assignments/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                      })
                }
                navigate('/assignments');
            })
    }

    return (
        <div>
            <h2 className="mt-8 underline text-yellow-600 font-bold text-2xl text-center">Update Assignment</h2>
            <div className="card shrink-0 w-full bg-base-100">
                <form onSubmit={handleUpdateAssignment} className="card-body">
                    {/* title description */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">Title</span>
                        </label>
                        <input name="title" type="text" defaultValue={update.title} className="input input-bordered" required />
                    </div>

                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold text-yellow-600">Description</span>
                        </label>
                        <input name="description" type="text" defaultValue={update.description} className="input input-bordered" required />
                    </div>


                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* level marks and date */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold text-yellow-600">Assignment difficulty Level</span>
                            </label>
                            <select name="level" type="text" className="select select-bordered join-item input " required>
                                <option disabled selected >{update.level}</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold text-yellow-600">Marks</span>
                            </label>
                            <input name="marks" type="text" defaultValue={update.marks} className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold text-yellow-600">Due Date</span>
                            </label>
                            <label className="input input-bordered relative">
                                <DatePicker
                                    name="date"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    defaultValue={update.date}
                                    required
                                />
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
                        <input name="photo" type="text" defaultValue={update.photo} className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn text-black bg-yellow-500" value="UPDATE" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;