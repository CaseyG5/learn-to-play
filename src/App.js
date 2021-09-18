import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import {useState} from 'react';
import { Redirect } from 'react-router-dom'
import Header from "./components/Header";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import DashboardPage from "./components/pages/DashboardPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import RegistrationPage from "./components/pages/RegistrationPage";
import ResultsPage from "./components/pages/ResultsPage";
import PracticePlan from "./components/pages/PracticePlan";
import {FaHome, FaUserCircle} from 'react-icons/fa';
import SearchForm from "./components/SearchForm";
import PartnerPage from "./components/pages/PartnerPage";
import NavBar from "./components/sections/header/NavBar"

// - [x] functions
// - [x] imp. v. declare
// - [x] ES6 | commonJS
// - [x] JSx


//// ------
// - [✓] props. | { }
// - [✓] state
//   - [ ] Hooks   ,
//    - [✓] useState ,
//    - [ ] useEffect
//    - [ ] async calls
//    - [ ] `fetch`
//    - - [ ] 'GET' <
//    - - [ ] 'POST' <
//    - - [ ] 'PUT'  <
//   >>>> [ ] Routing
//        >>>> Jamstack <<< || LAMP || M[E][X]N

//@TODO: connect YT data api                                        --- DONE
//@TODO: allow dynamic search with words entered into input field   --- DONE
//@TODO: search icons for buttons and nav                           --- DONE
//@TODO: make DB for Docker and connect                             --- SKIPPED
//@TODO: move DB to Supabase and connect                            --- DONE
//@TODO: when click Login, check UN & PW, then redirect to Dashboard/Profile --- DONE
// @TODO: go to profile/dashboard if already logged in              --- OK
// @TODO: problem...traditional navigation with <Link> tags doesn't work because I can't send a prop to the component/page I'm linking to to update the login status
//@TODO: update lastLogin upon logging out
//@TODO: change user icon on dashboard page to logout icon if currently logged in

export default function App() {
    const [page, setPage] = useState("home");

    return (
        <div className="bg-gray-500 h-screen">
            <Header />

            <div className="w-96 h-mobile bg-white p-6  mx-auto rounded">
                <NavBar page={page} setPage={setPage}/>

                <Switch>
                    <Route exact path="/" >
                        <HomePage page={page} setPage={setPage} />
                    </Route>
                </Switch>

            </div>

        </div>
    );
}
// <Route exact path="/search" component={ResultsPage} />
// <Route exact path="/about" component={AboutPage} />
// <Route exact path="/contact" component={ContactPage} />
// <Route exact path="/dashboard" component={DashboardPage} />
// <Route exact path="/profile" component={ProfilePage} />

/*
            <Switch>
                <Route exact path="/" component={HomePage} />

                <Route exact path="/dashboard" >
                    {loggedIn ?
                        <DashboardPage member={member} setLoggedIn={setLoggedIn}/> :
                        <LoginPage setMember={setMember} setLoggedIn={setLoggedIn}/>
                    }
                </Route>

                <Route exact path="/login" >
                    {loggedIn ?
                        <HomePage /> :
                        <LoginPage setMember={setMember} setLoggedIn={setLoggedIn}/>
                    }
                </Route >

                <Route exact path="/registration" component={RegistrationPage} />
            </Switch>
 */