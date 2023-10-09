
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-game.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

  const location = useLocation();
  // console.log(location);
  const Navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";
  const { logout, user } = useContext(AuthContext)
  const handleLogOut = () => {


    logout()

      .then(() => {
        Navigate(from)

        toast.success("Sign-out successful");
      }).catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="">
      <nav className="flex justify-between items-center py-6 shadow-md px-5">

        <img className="h-16 w-36" src={logo} alt="" />

        <ul className=" gap-5 flex ">
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
          <li>
            <NavLink
              to="/About"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400  btn" : "btn"
              }
            >
              About
            </NavLink>

          </li>
          <li>
            <NavLink
              to="/Upcomming"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400  btn" : "btn"
              }
            >
              Upcomming
            </NavLink>

          </li>
          <label className=" mr-5">
            {user && <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
              <img style={{ width: "50px" }} className="w-50 rounded-full circle" src={user?.photoURL} />
            </div>}

          </label>
          {user ? <li >
            <NavLink
              to="/Logout"
              onClick={handleLogOut}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400  btn" : "btn"
              }
            >
              Logout
            </NavLink>


          </li>
            : <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400  btn" : "btn"
                }
              >
                Login
              </NavLink>

            </li>
          }
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
