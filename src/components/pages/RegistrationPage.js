import {useState} from "react";
import supabase from "../../supabaseClient";    // connect to supabase via api
import RegistrationForm from "../sections/auth/RegistrationForm";
import RegistrationMessage from "../sections/auth/RegistrationMessage";
import axios from 'axios';
import Config from '../../Config';

const RegistrationPage = ( {setPage} ) => {
    const [regMsg, setRegMsg] = useState("Please join the community to continue.");

    // const sesh = supabase.auth.session();
    // console.log("session is: ", sesh);

    const signUpUser = async (userObj) => {
        setRegMsg("Attempting registration...");
        try {
            let { user, error } = await supabase.auth.signUp({
                email: userObj.email,
                password: userObj.password
            });
            if (error) throw error;
            else if( !user ) {
                setRegMsg("No user returned - Supabase signup failed");
                return;
            }

            setRegMsg("Completing registration...");
            const response = await axios( {
                method: 'POST',
                url: `${Config.SUPA_URL}/rest/v1/userz`,
                headers: {
                    "apikey": Config.SUPA_ADMIN_KEY,
                    "Authorization": `Bearer ${Config.SUPA_ADMIN_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=representation"
                },
                data: {
                    "id": user.id,
                    "name": userObj.name
                }
            }).then( (resp) => {
                setRegMsg( `${resp["data"][0]["name"]} has joined successfully.`  );
            });

        } catch(e) {
            console.log( e);
            setRegMsg( `Registration error: ${e.description | e.message}` );
        }

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
      <RegistrationForm signUp={signUpUser}    />
      <span>Already joined? Log in <button className="text-blue-500 underline" onClick={ () => {
          setPage("login");
      }} >here</button>.</span>
    </div>
  );
};

export default RegistrationPage;


// const [loading, setLoading] = useState(true);
// const [username, setUsername] = useState(null);
// const [website, setWebsite] = useState(null);
// const [avatar_url, setAvatarUrl] = useState(null);
//
// useEffect( () => {
//     getProfile();
// }

// const handleLogin = async (email) => {
//     try {
//         setLoading(true);
//         const { error } = await supabase.auth.signIn( {email} );
//         if (error) throw error;
//         alert('Check yo email for the login link!');
//     } catch (error)  {
//         alert(error.description || error.message);
//     } finally {
//         setLoading(false);
//     }
// }
// async function getProfile() {
//     try {
//         setLoading(true);
//         const user = supabase.auth.user();
//
//         let { data, error, status } = await supabase
//             .from('profiles')
//             .select(`username, website, avatar_url`)
//             .eq('id', user.id)
//             .single();
//
//         if (error && status !== 406) {
//             throw error
//         }
//         if (data) {
//             setUsername(data.username);
//             setWebsite(data.website);
//             setAvatarUrl(data.avatar_url);
//         }
//     } catch (error) {
//         alert(error.message);
//     } finally {
//         setLoading(false);
//     }
// }
//
// async function updateProfile( { username, website, avatar_url } ) {
//     try {
//         setLoading(true);
//         const user = supabase.auth.user()
//
//         const updates = {
//             id: user.id,
//             username,
//             website,
//             avatar_url,
//             updated_at: new Date(),
//         }
//
//         let { error } = await supabase.from('profiles').upsert(updates, {
//             returning: 'minimal'  // don't return value after inserting
//         });
//
//         if (error) {
//             throw error;
//         }
//     } catch (error) {
//         alert(error.message);
//     } finally {
//         setLoading(false);
//     }
// }

/*
const { resp } = await axios( {
    method: 'POST',
    url: axiosURL,
    // responseType: 'application/json',
    headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMxMTI1Njk0LCJleHAiOjE5NDY3MDE2OTR9.Zs6mQF5Gi0vZLvx9EdQmg0t4h9mw80z_lq1_kLuqQ84",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMxMTI1Njk0LCJleHAiOjE5NDY3MDE2OTR9.Zs6mQF5Gi0vZLvx9EdQmg0t4h9mw80z_lq1_kLuqQ84",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    },
    data: {
      "id": "57ee7fee-45ae-488e-8356-32c8f03584cf",
      "name": "Casey",
      "created_at": "2021-06-12"
    }
});
 */

/* REPEATED ERRORS - NOTHING RETURNED TO USER AND SESSION - WHY?
const { user1, session, signupError } = await supabase.auth.signUp( {
                email: userObj.email,
                password: userObj.password
            });
            if (signupError) throw signupError;
 */

/* DOESN'T WORK EITHER - 422 OR 500 ERRORS
const signup = await axios( {
    method: 'POST',
    url: 'https://ycwmaxsxjguznhpxtooy.supabase.co/auth/v1/signup',
    headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMxMTI1Njk0LCJleHAiOjE5NDY3MDE2OTR9.Zs6mQF5Gi0vZLvx9EdQmg0t4h9mw80z_lq1_kLuqQ84",
        "Content-Type": "application/json"
    },
    data: {
        "email": userObj.email,
        "password": userObj.password
    }
}).then( (resp) => { console.log("initial signup response: ", resp); } );
await console.log(`Signup status: ${signup.status}`);
*/