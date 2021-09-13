import dotenv from 'dotenv';        // and add  const TEST_KEY = process.env.TEST_KEY;
import { createClient } from '@supabase/supabase-js';
import { useRef } from "react";
import Config from '../../Config'
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

const API_URL = Config.SUPA_URL;
const API_KEY = Config.SUPA_KEY;

// = process.env.SUPABASE_KEY


function LoginPage( {setLoggedIn} ) {

    const handleLogin = (typedEmail, typedPassword) => {

        const supaLogin = async () => {
            // connect to supabase via api
            const supabase = createClient(API_URL, API_KEY);
            //supabase.from('Users').select('userName' );

            let { user, error } = await supabase.auth.signIn( {
                email: typedEmail,
                password: typedPassword
            })
            if(!error) {
                setLoggedIn(true);
                console.log("User " + user + " logged in");
            }
            else console.log("Error: " + error.message);
        }

        supaLogin();
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="my-8 p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
            <h2 className="text-xl">Please log in to continue.</h2>
            <LoginForm handleLogin={handleLogin} />
            <span>Haven't yet joined? Register <Link to="/registration" className="text-blue-500 underline">here</Link>.</span>
        </div>
    );
}

export default LoginPage;
