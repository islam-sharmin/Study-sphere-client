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
        <div className='flex items-center justify-center'>
            <div className=''>
                <img src={loginImg} alt="" className='w-[600px]' />
            </div>
            <div className='md:w-3/4 lg:w-1/2 mt-5'>
                <h2 className="text-3xl text-center font-bold text-yellow-600">Please Login</h2>
                <form className="card-body mx-auto">
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
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleLogin} className="btn bg-yellow-500 text-black">Login</button>
                    </div>

                    <div className="divider">OR</div>

                    <div className="form-control">
                        <button onClick={handleGoogleLogIn} className="btn bg-yellow-500 text-black flex items-center gap-2"> <FaGoogle /> Login with Google</button>
                    </div>
                    <div className="form-control mt-3">
                        <button onClick={handleGitHubLogIn} className="btn bg-yellow-500 text-black flex items-center gap-2"> <FiGithub /> Login with GitHub</button>
                    </div>
                </form>
                <p className="text-center mb-4">Do not have an account. Please <Link className="text-yellow-700 font-bold" to="/signup">Sign Up</Link></p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;