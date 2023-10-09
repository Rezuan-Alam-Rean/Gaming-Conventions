import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";




const SocialLogin = () => {
    
    const location = useLocation();
    // console.log(location);
    const Navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const {googleLogin}=useContext(AuthContext);

    const handleSocialLogin =() => {

        googleLogin().then(result=>{
            Navigate(from)

            toast.success("login succesfull !");
        })
    

    
    }
    
    
    
    
    return (
        <>
            <h2 className="text-xl font-bold"> Another Login Option</h2>
            <div className="flex justify-around">
                <button
                    onClick={handleSocialLogin}
                    className="btn btn-neutral btn-sm">Google</button>
                
            </div>
        </>
    );
};

export default SocialLogin;



