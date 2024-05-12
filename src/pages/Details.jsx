import { Link, useLoaderData } from "react-router-dom";


const Details = () => {

    const details = useLoaderData();

    return (
        <div>
            <div className="hero mt-8">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <img src={details.photo} className="rounded-lg shadow-xl bg-base-300 h-[70vh] w-full md:w-1/2" />
                    <div className="space-y-3 py-2">
                        <h1 className="text-2xl font-bold text-yellow-600">{details.title}</h1>
                        <p><span className="font-bold">Description: </span>{details.description}</p>
                        <hr />
                        <p><span className="font-bold">Average Cost: </span>{details.level}</p>
                        <p><span className="font-bold">Seasonality: </span>{details.marks}</p>
                        <p><span className="font-bold">Travel Time: </span>{details.date}</p>
                        <hr />
                        <Link to='/takeAssignment'><button className="btn text-black bg-yellow-500 mt-5">Take Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;