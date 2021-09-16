import { useState, useRef } from "react";

function RegistrationForm(props) {
  //const [register, setRegister] = useState();  //?

  const name = useRef();
  const email = useRef();
  const password = useRef();

  // this is the handler for the form
  const handleSubmit = (evt) => {
    // this is the event that will be sent up
      evt.preventDefault();

      // ensure no fields left blank
      if( name.current.value === "" || email.current.value === "" || password.current.value === "" ) return;

      let newUser = {};
      newUser.name = name.current.value;
      newUser.email = email.current.value;
      newUser.password = password.current.value;

      name.current.value = "";
      email.current.value = "";
      password.current.value = "";

      props.addUser(newUser);
  };
  return (
    <form onSubmit={handleSubmit}  className="w-80 my-8 flex flex-col items-center justify-between">
        <label htmlFor="name" className="w-full mb-4 flex flex-col items-center">
            <input name="name" type="text" ref={name} className="w-64 border-2" autoComplete="off"/>
            <span className="text-sm">Name</span>
        </label>
        <label htmlFor="email" className="w-full mb-4 flex flex-col items-center">
            <input name="email" type="text" ref={email} className="w-64 border-2" autoComplete="off"/>
            <span className="text-sm">Email</span>
        </label>
        <label htmlFor="password" className="w-full flex flex-col items-center">
            <input name="password" type="password" ref={password} className="w-64 border-2" autoComplete="off"/>
            <span className="text-sm">Password</span>
        </label>
        <input type="submit" value="Register"
               className="w-32 h-8 mt-6 border border-black rounded-md bg-green-300 font-bold" />
    </form>
  );
}

export default RegistrationForm;
