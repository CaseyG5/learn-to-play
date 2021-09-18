
import supabase from '../../supabaseClient';
import { useState } from "react";
import Config from '../../Config'
import LoginForm from '../LoginForm';
import { Link } from 'react-router-dom';


function LoginPage( {setMember, setLoggedIn, setPage} ) {
    const [name, setName] = useState( "" );
    // const [location, setLocation] = useState( {} )
    // const [instruments, setInstruments] = useState( {} );
    // const [about, setAbout] = useState( "" );
    // const [acctStatus, setAcctStatus] = useState( "" );
    // const [dateJoined, setDateJoined] = useState( null );
    // const [lastLogin, setLastLogin] = useState( null)


    const handleLogin = async (typedEmail, typedPassword) => {

        try {
            // // const user = supabase.auth.user();
            const { user, session, signInError } = await supabase.auth.signIn({
                email: typedEmail,
                password: typedPassword
            })
            if (signInError) throw signInError;
            console.log(user);
            const theirID = user.id;
            // let { data: members, selectError } = await supabase
            //     .from('members')
            //     .select(`*, auth.users (id) `);
            // const { data, selectError, status } = await supabase.from('members')
            //                                                     .select('name')
            //                                                     .eq('id', theirID)
            //                                                     .single();

            // if (selectError) throw selectError;
            //console.log( data );

            // const {data, error, status} = await supabase.from('members')
            //                             .select('userID, name, created_at')
            //                             .eq('email', typedEmail)
            //                             .eq('password', typedPassword)
            //                             .single();
            //
            // if (error && status !== 406) throw error;
            // if (data) {
            //     // update states? to display name, location, about, etc.
            //     console.log(data);
            //     console.log(data.userID + " - " + data.name + " - joined on " + data.created_at);
            //     // setName(data.name);
            //     // setLocation(data.location);
            //     // setDateJoined(data.dateJoined);
            // console.log("Sign in successful");
            setMember( {
                name: "Casey Geist",        // data.name
                location: "Boston, MA, USA",   // data.location
                about: "developer & musician",  // data.about
                instruments: "guitar, piano"  // data.instruments
            } )

            setLoggedIn(true);
                //console.log("User " + data.name + " logged in");
            //}
        } catch (e) {
            alert(e.description || e.message);
        }

    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="my-8 p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
            <h2 className="text-xl">Please log in to continue.</h2>
            <LoginForm handleLogin={handleLogin} />
            <span>Haven't yet joined? Register <button className="text-blue-500 underline" onClick={ () => {
                setPage("register");
            }}>here</button>.</span>
        </div>
    );
};

export default LoginPage;


// 403 - access denied
// 404 - not found
// 406 - not acceptable