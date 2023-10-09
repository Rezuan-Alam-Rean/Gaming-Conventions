
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-game.png"

const Navbar = () => {
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
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400  btn" : "btn"
              }
            >
              Allgames
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
