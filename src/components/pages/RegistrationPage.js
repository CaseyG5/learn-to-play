//[Page] Registration / state: message ?
import useState from "react";
import axios from "axios";
import RegistrationForm from "../sections/auth/RegistrationForm";
import RegistrationMessage from "../sections/auth/RegistrationMessage";

const RegistrationPage = () => {
  const [regMsg, setRegMsg] = useState("");

  const createNewUser = (userName, emailAddr) => {
    // you can use the async/await here, it's a fit
    // const newUser = { name: userName, email: emailAddr };
    // // DON'T use fetch, use... axios
    // axios.post(Config.API_URL, newUser).then( resp => {
    // }).catch( error => )
    // axios.post({url: Config.API_URL, data: newUser})
    // if (successful) setRegMsg(`${newUser.name} user added successfully`);
    // else setRegMsg("Error - could not add user");
  };

  return (
    <div className="mt-24 flex flex-col items-center">
      <h1 className="text-3xl">Please register to continue</h1>
      <RegistrationForm addUser={createNewUser} />
      <RegistrationMessage message={regMsg} />
    </div>
  );
};

export default RegistrationPage;
