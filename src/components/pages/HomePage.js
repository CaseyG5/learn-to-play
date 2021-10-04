
import { useState } from "react";
import Config from '../../Config'
import axios from "axios";
import SearchForm from '../SearchForm';
import ResultsPage from "./ResultsPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import DashboardPage from "./DashboardPage";
import PracticePlan from "./PracticePlan";
import PartnerPage from "./PartnerPage";
import SavedRow from "../SavedRow";

//@TODO: use in API_URL...  &fields=items(id,snippet)
// use 'list' operation to GET a list of 0+ resources
// the 'part' parameter to select only the resource components which are needed
// the 'fields' parameter filters the API response, containing the resource parts identified with 'part'


const HomePage = ( {page, setPage} ) => {
    let tempSaved = [];
    const [favesUpdated, setFavesUpdated] = useState(false);
    const [savedVids, setSavedVids] = useState( [] );
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
        const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=rating&q=${searchTerms}&key=${Config.YTD_KEY}`;

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

    const addToFaves = (vidID, vidURL, vidTitle) => {
        console.log("addToFaves BUTTON clicked");

        tempSaved.push( {                     // save the new item
            id: vidID,
            url: vidURL,
            title: vidTitle
        } );
        setSavedVids( [ ...savedVids, <SavedRow number={savedVids.length + 1} url={vidURL} title={vidTitle} key={vidID}/> ] );

        setFavesUpdated(true);
    };




    switch(page) {
        case "results":
            return <ResultsPage data={videos} query={searchWords} addToFaves={addToFaves} loggedIn={loggedIn}/> ;
        case "login":
            if (!loggedIn) return <LoginPage setMember={setMember} setLoggedIn={setLoggedIn} setPage={setPage} savedVids={savedVids} setSavedVids={setSavedVids} />;
            return <DashboardPage member={member} setMember={setMember} setLoggedIn={setLoggedIn} setPage={setPage} savedVids={savedVids}/>;
        case "dashboard":
            if (loggedIn) return <DashboardPage member={member} setMember={setMember} setLoggedIn={setLoggedIn} setPage={setPage} savedVids={savedVids}/>;
            return <LoginPage setMember={setMember} setLoggedIn={setLoggedIn} setPage={setPage} savedVids={savedVids} setSavedVids={setSavedVids} /> ;
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