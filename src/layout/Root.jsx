import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="border-b border-yellow-400"></div>
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;