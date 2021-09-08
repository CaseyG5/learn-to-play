import axios from 'axios';
import ResultsTable from '../ResultsTable';

// This page will display the search results from the request via the YouTube Data API

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

// We are interested in:  'search result', 'thumbnail', 'video' and maybe 'videoCategory'
// 'search result' will probably contain a 'videoID' that identifies the video
// use 'list' operation to GET a list of 0+ resources
// the 'part' parameter to select only the resource components which are needed
// the 'fields' parameter filters the API response, containing the resource parts identified with 'part'

let searchTerms = "blues%2Cguitar%2Clesson";
const API_KEY = "abcd1234";
const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&order=rating&q=${searchTerms}&key=${API_KEY}`;
let data = [];

const ResultsPage = async () => {

    // searchTerms = props.searchString;
    // searchTerms.replaceAll(' ', '%2C');


    console.log("starting search...");

    const getVideos = async () => {
        return await axios.get(API_URL)
            .then((resp) => {
                data = resp["data"]["items"];
                console.log("got the data");
            })
            .catch(error => console.log(error));
    };

    let promise = await getVideos();


    // format data if needed
    // display search results on another page
    // go to   <ResultsPage searchString={searchTerms} /


    console.log("Hopefully you got the data...blah blah blah...moving on to return statement with XML");

    return (
        <div className="text-center">
            <h3 className="font-bold underline">Showing search results:</h3>
            <h4 className="mb-6 text-md">video lessons for {'\"blues guitar\"'}</h4>
            <ResultsTable content={data}/>
        </div>
    );
};

export default ResultsPage;

