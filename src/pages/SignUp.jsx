import { Link, useNavigate } from 'react-router-dom';
import pic from '../assets/login.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoURL, email, password)

        // password validation
        if (password.length < 6) {
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            return;
        }
        else if (!/[a-z]/.test(password)) {
            return;
        }


        // create user
        try {
            const result = createUser(email, password, name, photoURL);
            console.log(result.user);
            setTimeout(() => {
                navigate('/');
            }, 1500);

        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <div className=''>
                <img src={pic} alt="" className='w-[600px]' />
            </div>
            <div className='md:w-3/4 lg:w-1/2 mt-5'>
                <h2 className="text-3xl text-center font-bold text-yellow-600">Sign Up Here</h2>
                <form className="card-body mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="email" name="name" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="email" name="photo" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative mb-4">
                        <input
                            className="w-full input input-bordered"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Set your password"
                            id="" required />
                        <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                    <div className="form-control mt-6">
                        <button onClick={handleRegister} className="btn bg-yellow-500 text-black">Sign Up</button>
                    </div>
                </form>
                <p className="text-center mb-4">Do not have an account. Please <Link className="text-yellow-700 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;