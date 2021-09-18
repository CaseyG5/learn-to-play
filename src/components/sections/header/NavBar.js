import { Link } from "react-router-dom";
import { useEffect } from 'react';
import {FaHome, FaUserCircle} from "react-icons/fa";

const NavBar = ( {page, setPage} ) => {
    let x;

    return (
      <div className="my-4 px-4 flex justify-between">
          <button onClick={ () => {
              setPage("home");
          }}>
              { < FaHome size={30}/> }
          </button>
          <button onClick={ () => {
              setPage("dashboard");
          }}>
              { < FaUserCircle size={30}/> }
          </button>
      </div>
    );
};
export default NavBar;




// <div className={"flex space-x-2"}>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     {/* Dashboard should only show for the use on */}
//     <Link to="/dashboard">Dashboard</Link>
//     <Link to="/login">Login</Link>
//     {/* this and the above should switch btw state */}
//     <Link to="/profile">My Account</Link>
//     <Link to="/registration">Register</Link>
// </div>

// <div className="w-96 px-6 py-3 flex justify-end">
//
//         <div className="w-1/3 flex justify-end">
//             {/*<Link to="/login">Login</Link>*/}
//             {/*<Link to="/registration">Register</Link>*/}
//         </div>
//
//     </div>