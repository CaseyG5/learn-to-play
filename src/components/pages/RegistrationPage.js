//[Page] Registration / state: message ?
import {useState} from "react";
import axios from "axios";
import RegistrationForm from "../sections/auth/RegistrationForm";
import RegistrationMessage from "../sections/auth/RegistrationMessage";
import {Link} from "react-router-dom";
//import Config from "../../Config";

const RegistrationPage = () => {
  const [regMsg, setRegMsg] = useState("Please join the community to continue.");
  let rowID = 0;
  let nextID = 1000;

  const getNextID = async () => {
    await axios.get(Config.API_URL).then( resp => {
      rowID = resp.data.total + 2;
      nextID += rowID;
    });

    console.log(`next user id will be: ${nextID}`);
  }

  const createNewUser = async (userObj) => {
    console.log("attempting to add:\n");
    for(let key in userObj) {
      console.log( key.valueOf() + "\n");
    }

    // you can use the async/await here, it's a fit
    const response = await axios.post(Config.API_URL, userObj).catch( error => {
      console.log(error);
    });
    console.log(response);
    //setRegMsg(`${userObj.firstname} has joined the community!`);
  };

  //getNextID();

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-8 p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
      <RegistrationMessage message={regMsg}  />
      <RegistrationForm addUser={createNewUser} newID={nextID}/>
      <span>Already joined? Log in <Link to="/login" className="text-blue-500 underline">here</Link>.</span>
    </div>
  );
};

export default RegistrationPage;
