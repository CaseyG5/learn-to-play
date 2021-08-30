import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import DashboardPage from "./components/pages/DashboardPage";
import HomePage from "./components/pages/HomePage";
import LoginInPage from "./components/pages/LoginInPage";
import ProfilePage from "./components/pages/ProfilePage";
import RegistrationPage from "./components/pages/RegistrationPage";

// - [x] functions
// - [x] imp. v. declare
// - [x] ES6 | commonJS
// - [x] JSx

// <HomePage /> @Casey
// <AboutPage /> @lady
// <ContactPage /> @jas
// <LoginIn /> @Dav
// <Dashboard /> @deb

// <Footer /> @Gre, src/component
// <NavBar /> @Geu, src/components

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

export default function App() {
  return (
    <div className="bg-gray-300 h-screen">
      {/* 
      we replaced this from NavBar to split into smaller bit
       */}
      <Header />
      <div className="bg-white p-6 w-4/5 mx-auto mt-6 rounded">
        <Switch>
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/login" component={LoginInPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
