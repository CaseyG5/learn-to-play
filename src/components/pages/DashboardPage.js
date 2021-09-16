import { Link } from 'react-router-dom';
import { FaSignOutAlt} from "react-icons/fa";

function DashboardPage( { setPage, member, setLoggedIn } ) {
    setPage("dashboard");

    return (
        <div>
            <h3 className="mb-6 text-center text-xl font-bold">Profile</h3>
            <h3 className={"mb-4 font-semibold"}>Hi {member.name}, welcome{ member.lastLogin ? " back." : "." }</h3>
            <p>Name: {member.name}</p>
            {/*<p>Location: {member.location}</p>*/}
            {/*<p>Instrument(s): {member.instruments}</p>*/}
            {/*<p>About: {member.about}</p>*/}
            {/*<p>Acct status: {member.acctStatus}</p>*/}
            {/*<p>Date joined: {member.dateJoined}</p>*/}
            {/*<p>Last login: {member.lastLogin}</p>*/}
            {/*<button onClick={setLoggedIn(false)} >{ <FaSignOutAlt size={30}/> }</button>*/}
        </div>
  );
}
export default DashboardPage;
