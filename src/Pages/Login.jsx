
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext, useState } from 'react';



const Login = () => {

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
      const [show, setShow] = useState(false);
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("");
      const {login} =useContext(AuthContext)
      const handleLogin=(event)=>{
          event.preventDefault();
          setError("");
          setSuccess("");
          // console.log(event);
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          login(email, password)
            .then((result) => {
              const loggedUser = result.user;
              // console.log(loggedUser);
              navigate(from)
              form.reset();
           
              setSuccess(" Login successfull");
            })
            .catch((error) => {
              setError(error.message);
            });
      }
  
 



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6 p-0">
                            <button type='submit' className="btn btn-neutral">Login</button>
                        </div>
                        <label className="label">
                            New here? <Link to="/register" className=" btn text-sm font-bold label-text-alt link link-hover"> Register</Link>
                        </label>
                        <SocialLogin />
                        <br/>
                        <p className="text-primary">
        {success}
        </p>
      <br />
      <p className="text-danger ">
        {error}
        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;