import { useState } from "react";

function RegistrationForm() {
  const [register, setRegister] = useState();

  // this is the handler for the form
  const handleSubmit = () => {
    // this is the event that will be sent up
  };
  return (
    <div>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
}

export default RegistrationForm;
