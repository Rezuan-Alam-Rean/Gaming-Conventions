import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const SocialLogin = () => {
    
    const {googleLogin}=useContext(AuthContext);
    // console.log(googleLogin);
    const handleSocialLogin =() => {

        googleLogin().then(result=>{
            console.log(result.user);
        })
    

    
    }
    
    
    
    // = (media) => {
    //     console.log(media);
    //     media()
    //         .then(res =>    console.log(res))
    //         .catch(error => console.log(error) )
    // }

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



