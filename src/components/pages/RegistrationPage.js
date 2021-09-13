
import {useState} from "react";
import axios from "axios";
import RegistrationForm from "../sections/auth/RegistrationForm";
import RegistrationMessage from "../sections/auth/RegistrationMessage";
import {Link} from "react-router-dom";
import {createClient} from "@supabase/supabase-js";
import Config from "../../Config";
//import Config from "../../Config";

const API_URL = Config.SUPA_URL;
const API_KEY = Config.SUPA_KEY;

// = process.env.SUPABASE_KEY

const RegistrationPage = () => {
  const [regMsg, setRegMsg] = useState("Please join the community to continue.");

  const createNewUser = (userObj) => {

      const supaJoin = async () => {
        // connect to supabase via api
        const supabase = createClient(API_URL, API_KEY);

        let { user, error } = await supabase.auth.signUp( {
          //name: userObj.name,
          email: userObj.email,
          password: userObj.password
        });

        if(error) {
          console.log("Error: " + error.message);
        }
        else if( user.id ) {
            console.log(user);
          console.log("User " + user.name + " registered");
          //setRegMsg(`${user} has joined the community!`);
        }
      };

      supaJoin();
  };

  // let rowID = 0;
  // let nextID = 1000;
  //
  // const getNextID = async () => {
  //   await axios.get(Config.API_URL).then( resp => {
  //     rowID = resp.data.total + 2;
  //     nextID += rowID;
  //   });
  //
  //   console.log(`next user id will be: ${nextID}`);
  // }
  //

  //   console.log("attempting to add:\n");
  //   for(let key in userObj) {
  //     console.log( key.valueOf() + "\n");
  //   }
  //
  //   // you can use the async/await here, it's a fit
  //   const response = await axios.post(Config.API_URL, userObj).catch( error => {
  //     console.log(error);
  //   });
  //   console.log(response);



  //getNextID();

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-8 p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
      <RegistrationMessage message={regMsg}  />
      <RegistrationForm addUser={createNewUser}    />
      <span>Already joined? Log in <Link to="/login" className="text-blue-500 underline">here</Link>.</span>
    </div>
  );
};

export default RegistrationPage;

// newID={nextID}