import { useRef } from "react";
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';


function LoginPage() {

    const handleLogin = (email, password) => {



        console.log(`Logging in as: 
          ${email}
          ${password}
          `);
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="my-8 p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
            <h2 className="text-xl">Please log in to continue.</h2>
            <LoginForm handleLogin={handleLogin} />
            <span>Haven't yet joined? Register <Link to="/registration" className="text-blue-500 underline">here</Link>.</span>
        </div>
    );
}

export default LoginPage;
