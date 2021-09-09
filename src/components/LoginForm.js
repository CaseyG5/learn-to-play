import { useRef } from 'react';

export default function LoginForm( {handleLogin} ) {

    const email = useRef();
    const password = useRef();

    const loginSubmit = (event) => {
        event.preventDefault();
        if(email.current.value === "" || password.current.value === "") return;
        handleLogin(email.current.value, password.current.value);
        email.current.value = "";
        password.current.value = "";
    };

    return (
        <>
            <form onSubmit={loginSubmit} className="w-80 my-8 flex flex-col items-center justify-between">
                <label htmlFor="email" className="w-full mb-4 flex flex-col items-center">
                    <input name="email" type="text" ref={email} className="w-64 border-2" autoComplete="off"/>
                    <span className="text-sm">Email</span>
                </label>
                <label htmlFor="password" className="w-full flex flex-col items-center">
                    <input name="password" type="password" ref={password} className="w-64 border-2" autoComplete="off"/>
                    <span className="text-sm">Password</span>
                </label>

                <input type="submit"
                       value="Login"
                       className="w-32 h-8 mt-6 border border-black rounded-md bg-blue-300 font-bold"  />
            </form>
        </>
    );
}