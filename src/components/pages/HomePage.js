
import SearchForm from '../SearchForm';
import ReadyBegin from '../ReadyBegin';
import FindBuddy from '../FindBuddy';
import ResultsTable from "../ResultsTable";
import axios from "axios";
import { useRef } from 'react';
import { Route, Redirect } from 'react-router-dom';

let searchTerms = "blues%2Cguitar%2Clesson";
const API_KEY = "abcd1234";
const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=rating&q=${searchTerms}&key=${API_KEY}`;
let data = [];

// &fields=items(id,snippet)

const HomePage = () => {

    const execSearch = async (event) => {
        event.preventDefault();
            //setSearchTerm(event.target.value);

            // grab what's in the search field,
            // searchTerms = props.searchString;
            // searchTerms.replaceAll(' ', '%2C');

            // skill level and check boxes
            // use it to build a fetch URL
            // fetch data via YouTube data API

        // const getVideos =  () => {
        //     return  axios.get(API_URL)
        //         .then( (resp) => {
        //             data = resp["data"]["items"];
        //             console.log(data);
        //         } )
        //         .catch( error => console.log(error) );
        // };

        //let promise = await getVideos();

            // format data if needed
            // display search results on another page
            // go to   <ResultsPage searchString={searchTerms} />

        //console.log("Reached END of execSearch function...moving on to return statement with XML")
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
                <h2 className="text-xl">Learn to Play</h2>
                <h3 className="mb-8 text-xl">ANY instrument</h3>
                <SearchForm handleSearch={execSearch}/>
                <ReadyBegin />
                <FindBuddy />
            </div>

            {/*<Route exact path="/">*/}
            {/*{searching ? <Redirect to="/search"/> : <HomePage />}*/}
            {/*</Route>*/}
        </>
    );
};

export default HomePage;


// users
// const [changeableVal, setChangeableVal] = useState(initialState)

// const loadMoreMessages = () => {
// newMessages = fetch(Message)
// setMessage(newMessages)
// }
