import Config from '../../Config'
import loggedIn from '../../Config'
import setLoggedIn from '../../Config'
import SearchForm from '../SearchForm';

import axios from "axios";
import { useState } from "react";
import { Route, Redirect } from 'react-router-dom';
import ResultsPage from "./ResultsPage";
import PracticePlan from "./PracticePlan";
import LoginPage from "./LoginPage";
import PartnerPage from "./PartnerPage";

const API_KEY = Config.YTD_KEY;
let videos = [];

// &fields=items(id,snippet)

const HomePage = ( {page, setPage} ) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [hasPlan, setHasPlan] = useState(false);           // get value from DB after logged in
    //const [dataReceived, setDataReceived] = useState(false);
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
            videos = response["data"]["items"] ;
            console.log(videos);

            if( response.status === 200 ) {
                //setDataReceived(true);
                setPage("results");
            }
        };

        let promise = getVideos();
    }

    switch(page) {
        case "results":
            return <ResultsPage data={videos} query={searchWords}/> ;
        case "dashboard":
            if (loggedIn) return <DashboardPage />;
            return <LoginPage setLoggedIn={setLoggedIn} /> ;
        case "practice":
            if(loggedIn) return <PracticePlan /> ;
            return <LoginPage setLoggedIn={setLoggedIn} /> ;
        case "partner":
            if(loggedIn && hasPlan) return <PartnerPage /> ;
            return <LoginPage setLoggedIn={setLoggedIn} /> ;
        default:
            return  <div className="flex flex-col items-center">
                        <h1 className="p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
                        <h2 className="text-xl">Learn to Play</h2>
                        <h3 className="mb-8 text-xl">ANY instrument</h3>
                        <SearchForm handleSearch={execSearch} setPage={setPage}/>
                    </div> ;
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