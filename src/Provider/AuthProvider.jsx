import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup , signOut, updateProfile,} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Hook/Firebase.config";
import toast from "react-hot-toast";




export const AuthContext = createContext(null);

// const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children  }) => {
    const [user, setUser] = useState(null);
 
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      
      });
      return () => {
        return unsubscribe();
      };
    }, []);
    const googleLogin = (value) => {
       return signInWithPopup(auth,googleProvider);

    };

    const logout = () => {
       
        return signOut(auth);
      };

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserData = (user, name) => {
        updateProfile(user, {
          displayName: name,
         
        })
          .then(() => {
            toast.success("Registion Successfull");
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

      const login = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
      };

    const authInfo = {
        googleLogin,
        createUser,
        updateUserData,
        login,
        logout,
        user
    };
   
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;