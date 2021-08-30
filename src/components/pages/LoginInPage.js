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
      <form onSubmit={handleLogin}>
        <input name="username" ref={username} type="text" />
        <input name="password" ref={password} type="passward" />
        {/* <button onClick={}>Login</button> */}
        <input type="sumbit" value="Login" />
      </form>
    </div>
  );
}

export default LoginInPage;
