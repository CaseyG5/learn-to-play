
import { useState } from "react";
import axios from "axios";
import SearchForm from '../SearchForm';
import ResultsPage from "./ResultsPage";

import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import DashboardPage from "./DashboardPage";
import PracticePlan from "./PracticePlan";
import PartnerPage from "./PartnerPage";

//@TODO: use in API_URL...  &fields=items(id,snippet)

const API_KEY = process.env.YOUTUBE_DATA_KEY;

const HomePage = ( {page, setPage} ) => {
    const [videos, setVideos] = useState( [] );
    const [loggedIn, setLoggedIn] = useState(false);
    const [member, setMember] = useState( {} );
    const [hasPlan, setHasPlan] = useState(false);           // get value from DB after logged in
    const [searchWords, setSearchWords] = useState("");

    const execSearch = (query) => {
        setSearchWords(query);
        const searchTerms = query.replaceAll(' ', '%2C');
        console.log(searchTerms);

        // take skill level and check boxes and
        // use them to build a fetch URL
        const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=rating&q=${searchTerms}&key=${API_KEY}`;

        // fetch data via YouTube data API
        const getVideos = async () => {
            const response = await axios.get(API_URL)
                .catch( error => console.log(error) );

            console.log(response);
            setVideos( response["data"]["items"] ) ;

            if( response.status === 200 ) {
                setPage("results");
            }
        };

        let promise = getVideos();
    }


    switch(page) {
        case "results":
            return <ResultsPage data={videos} query={searchWords}/> ;
        case "login":
            if (!loggedIn) return <LoginPage setMember={setMember} setLoggedIn={setLoggedIn} setPage={setPage}/>;
            return <DashboardPage member={member} setMember={setMember} setLoggedIn={setLoggedIn} />;
        case "dashboard":
            if (loggedIn) return <DashboardPage member={member} setMember={setMember} setLoggedIn={setLoggedIn} />;
            return <LoginPage setMember={setMember} setLoggedIn={setLoggedIn} setPage={setPage} /> ;
        // case "practice":
        //     if(loggedIn) return <PracticePlan /> ;
        //     return <LoginPage setLoggedIn={setLoggedIn} /> ;
        // case "partner":
        //     if(loggedIn && hasPlan) return <PartnerPage /> ;
        //     return <LoginPage setLoggedIn={setLoggedIn} /> ;
        case "register":
            return <RegistrationPage setPage={setPage} />;
        default:
            return  <SearchForm handleSearch={execSearch} setPage={setPage} />;
    }




};

export default HomePage;


// users
// const [changeableVal, setChangeableVal] = useState(initialState)

// const loadMoreMessages = () => {
// newMessages = fetch(Message)
// setMessage(newMessages)
// }

// dataReceived ?
//     <ResultsPage data={videos} query={searchWords}/> :
//     <div className="flex flex-col items-center">
//         <h1 className="p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
//         <h2 className="text-xl">Learn to Play</h2>
//         <h3 className="mb-8 text-xl">ANY instrument</h3>
//         <SearchForm handleSearch={execSearch} setLoggedIn={setLoggedIn}/>
//     </div>