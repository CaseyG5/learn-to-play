import { useRef } from "react";

/**
 * @author: David
 */

function LoginInPage() {
  // since we have this form, we can collect it's value
  //see this for more of Ref: https://bit.ly/3zqey1l
  const username = useRef();
  const password = useRef();

  // this is the function that will run
  // when we submit below
  const handleLogin = (event) => {
    event.preventDefault();
    // login to submit this form
    // let's check this is works...
    // we can get the value of username , password from the current

    console.log(`Logging in as: 
  ${username.current.value}
  ${password.current.value}
  `);
  };

  return (
    <div>
      <h2 className="font-bold">Login Page</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input name="username" ref={username} type="text" className="my-4 border" autocomplete="off"/>
        <input name="password" ref={password} type="passward" className="mb-4 border" />
        {/* <button onClick={}>Login</button> */}
        <input type="submit" 
              value="Login" 
            className="w-32 m-auto bg-blue-300"  />
      </form>
    </div>
  );
}

export default LoginInPage;
