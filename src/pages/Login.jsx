import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import loginImg from '../assets/login.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const { logIn, logInWithGoogle, logInWithGitHub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('login page location', location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('user logged in successfully');

                // navigate after login
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500)

            })
            .catch(error => {
                console.error(error);
                toast.error('Invalid email or password');
            })
    }

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('Google logged successfully');

                // navigate after login
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500)
            })
            .catch(error => {
                console.error(error);
                toast.error('Login failed, please try again');
            })
    }

    const handleGitHubLogIn = () => {
        logInWithGitHub()
            .then(result => {
                console.log(result.user);
                toast.success('GitHub logged successfully');

                // navigate after login
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500)
            })
            .catch(error => {
                console.error(error);
                toast.error('Login failed, please try again');
            })
    }

    return (
        <div className='flex items-center flex-col md:flex-row justify-center'>
            <div className='flex-1'>
                <img src={loginImg} alt="" className='w-[600px]' />
            </div>
            <div className='flex-1 mt-5'>
                <h2 className="text-3xl text-center font-bold text-yellow-600">Please Login</h2>
                <form onSubmit={handleLogin} className="w-full md:w-[90%] mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-yellow-600 font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-yellow-600 font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-yellow-500 text-black">Login</button>
                    </div>
                </form>

                <div className='w-full md:w-[90%] mx-auto'>
                    <div className="divider">OR</div>

                    <div className="form-control">
                        <button onClick={handleGoogleLogIn} className="btn bg-yellow-500 text-black flex items-center gap-2"> <FaGoogle /> Login with Google</button>
                    </div>
                    <div className="form-control mt-3">
                        <button onClick={handleGitHubLogIn} className="btn bg-yellow-500 text-black flex items-center gap-2"> <FiGithub /> Login with GitHub</button>
                    </div>
                </div>

                <p className="text-center mb-4 mt-2">Do not have an account. Please <Link className="text-yellow-700 font-bold" to="/signup">Sign Up</Link></p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;