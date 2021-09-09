import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-96 px-6 py-3 rounded bg-gray-200 flex justify-end">

        <div className="w-1/3 flex justify-between">
            <Link to="/login">Login</Link>
            <Link to="/registration">Register</Link>
        </div>

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