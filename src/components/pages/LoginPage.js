
import supabase from '../../supabaseClient';
import { useState } from "react";
import Config from '../../Config'
import LoginForm from '../LoginForm';
import { Link } from 'react-router-dom';
import axios from "axios";


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
            });
            if (signInError) throw signInError;
            else if(!user) {
                console.log("no user returned - login failed");
                return;
            }
            (user.role === "authenticated") ? console.log( "user authenticated" ) : console.log("user not authenticated");

            // let { data: userz, error } = await supabase.from('userz')
            //                             .select('member_id,name,created_at')
            //                             .eq('id', user.id);

            const response = await axios( {
                method: 'GET',
                url: `https://xkqhbvxuryilkcesbifl.supabase.co/rest/v1/userz?id=eq.${user.id}&select=*`,
                headers: {
                    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMyNDMyOTE5LCJleHAiOjE5NDgwMDg5MTl9.z8UFoTve8-1tgxZbDkNOC9ha24DVqxS48-Ru3T2igc4",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMyNDMyOTE5LCJleHAiOjE5NDgwMDg5MTl9.z8UFoTve8-1tgxZbDkNOC9ha24DVqxS48-Ru3T2igc4",
                    "Content-Type": "application/json",
                    "Prefer": "return=representation"
                }
            }).then(
                (resp) => {
                    console.log(resp);
                    const data = resp["data"][0];
                    console.log( `${ resp["data"][0]["name"] } has logged in.`  );
                    setMember( {
                        id: data["id"],
                        name: data["name"],
                        memberID: data["member_id"],
                        dateJoined: data["created_at"],
                        lastLogin: data["updated_at"],
                        location: data["location"],
                        about: data["about"],
                        hasPlan: data["has_plan"]
                    } )
                    console.log("Sign in successful");
                    setLoggedIn(true);
            } );


            //if (error) throw error;
            // if (!response) {
            //     console.log("no data returned - could not get member info");
            //     await supabase.auth.signOut();
            //     return;
            // }


                // setName(data.name);
                // setLocation(data.location);
                // setDateJoined(data.dateJoined);


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

// 400 - bad request
// 401 - unauthenticated
// 403 - access denied
// 404 - not found
// 405 - method not allowed
// 406 - not acceptable
// 409 - duplicate?
// 422 - unprocessable entity