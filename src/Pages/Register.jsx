import { Link, useLocation, useNavigate, } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate()
    let form = location.state?.from?.pathname || "/";

    const { createUser ,updateUserData} = useContext(AuthContext);
    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const handleRegister = (event) => {
        event.preventDefault()
        setError('')
        setSuccess('')
        
        const email = event.target.email.value;
        console.log(email);
        const password = event.target.password.value;
        console.log(password);
        const name = event.target.name.value;
        console.log(name);
        createUser(email, password)
            .then(result => {
                navigate(form)

                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserData(result.user, name)
                form.reset()
                toast.success('Account has been created successfully')
            })
            .catch(error => {
                
            })

            if (
                password.length < 6 ||
                !/[A-Z]/.test(password) ||
                !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)
              ) {
                toast.error('Password must be at least 6 characters, contain a capital letter, and have a special character');
              }
              
    };





    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister} >

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="text" className="input input-bordered" name='name' />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" name='password' />
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button className="btn btn-neutral" type='submit'>Register</button>
                        </div>
                        <label className="label">
                            Have an account? <Link to="/login" className=" text-sm btn font-bold label-text-alt link link-hover">Please Login</Link>
                        </label>
                        <SocialLogin></SocialLogin>
                        <br></br>
                        <div className="text-green ">
                            {success}
                        </div>
                        <br />
                        <div className="text-danger ">
                            {error}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;