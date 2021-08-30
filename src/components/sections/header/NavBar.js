import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={"flex space-x-2"}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {/* Dashboard should only show for the use on */}
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      {/* this and the above should switch btw state */}
      <Link to="/profile">My Account</Link>
    </div>
  );
};
export default NavBar;
