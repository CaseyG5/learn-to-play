import { useRef } from "react";
import { Link } from 'react-router-dom';

/**
 * @author: David
 */

function LoginPage() {
  // since we have this form, we can collect it's value
  //see this for more of Ref: https://bit.ly/3zqey1l
  const username = useRef();
  const password = useRef();

  // this is the function that will run
  // when we submit below
  const handleLogin = (event) => {
    event.preventDefault();
    // login to submit this form
    // let's check if this works...
    // we can get the value of username , password from the current

    console.log(`Logging in as: 
  ${username.current.value}
  ${password.current.value}
  `);
  };

  return (
      <div className="flex flex-col items-center">
        <h1 className="my-6 text-3xl">L2P logo here</h1>
        <h2 className="text-xl">Please log in to continue.</h2>

        <form onSubmit={handleLogin} className="w-80 my-8 flex flex-col items-center justify-between">
          <label htmlFor="email" className="w-full mb-4 flex flex-col items-center">
            <input name="email" type="text" ref={username} className="w-64 border-2" autoComplete="off"/>
            <span className="text-sm">Email</span>
          </label>
          <label htmlFor="password" className="w-full flex flex-col items-center">
            <input name="password" type="password" ref={password} className="w-64 border-2" autoComplete="off"/>
            <span className="text-sm">Password</span>
          </label>

          <input type="submit"
              value="Login" 
            className="w-32 h-8 mt-6 border border-black rounded-md bg-blue-300 font-bold"  />
        </form>
        <span>Haven't yet joined? Register <Link to="/registration" className="text-blue-500 underline">here</Link>.</span>
    </div>
  );
}

export default LoginPage;
