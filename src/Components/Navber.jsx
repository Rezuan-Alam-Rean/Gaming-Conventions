
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-game.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {logout }= useContext(AuthContext)
  const handleLogOut = () => {
  

      logout()
      .then(() => {
        console.log("Sign-out successful");
      }).catch((error) => {
        console.log(error.message);
      });
    };
  return (
    <div className="">
      <nav className="flex justify-between items-center py-6 shadow-md px-5">

            <img className="h-16 w-36" src={logo} alt="" />  

        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400  btn" : "btn"
              }
            >
              Home
            </NavLink>

          </li>

          <li >
            <NavLink 
              to="/Allgames"
              onClick={handleLogOut}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400  btn" : "btn"
              }
            >
              Logout
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400  btn" : "btn"
              }
            >
              Login
            </NavLink>

            
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
