import {useState} from "react";
import supabase from "../../supabaseClient";    // connect to supabase via api
import RegistrationForm from "../sections/auth/RegistrationForm";
import RegistrationMessage from "../sections/auth/RegistrationMessage";



const RegistrationPage = ( {setPage} ) => {
    const [regMsg, setRegMsg] = useState("Please join the community to continue.");

    const createNewUser = async (userObj) => {
        try {
            const { user1, session, signupError } = await supabase.auth.signUp( {
                email: userObj.email,
                password: userObj.password
            });
            if (signupError) throw signupError;

            // then how to add name to 'members' table using 'auth' table and 'id' or uuid???
            // CURRENTLY GET 403 - access forbidden
            // const { data, upsertError } = await supabase.from('members').insert( [
            //     { name: userObj.name }
            // ]);
            //
            // if( upsertError ) throw upsertError;
            // console.log(data);
            // console.log(user);
            // console.log("User " + user2.name + " registered");
            // setRegMsg(`${user} has joined the community!`);

        } catch(error) {
            alert(error.description || error.message);
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
      <RegistrationForm addUser={createNewUser}    />
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