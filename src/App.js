import './App.css';
import { Route, Switch } from "react-router-dom";
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
//@TODO: search icons for buttons                                   --- DONE
//@TODO: make DB for Docker and connect                             ---
//@TODO: move DB to Supabase and connect
//@TODO: when click Login, check UN & PW, then redirect to Dashboard/Profile

export default function App() {
  return (
    <div className="bg-gray-300 h-screen">

      <Header />
      <div className="w-96 h-172 bg-white p-6  mx-auto rounded">
        <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
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