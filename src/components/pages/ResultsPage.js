import axios from 'axios';
import ResultsTable from '../ResultsTable';

// This page will display the search results from the request via the YouTube Data API

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

// use 'list' operation to GET a list of 0+ resources
// the 'part' parameter to select only the resource components which are needed
// the 'fields' parameter filters the API response, containing the resource parts identified with 'part'

const ResultsPage = ( {data, query} ) => {

    return (
        <div className="text-center">
            <h3 className="font-bold underline">Showing search results:</h3>
            <h4 className="mb-6 text-md">videos for: <em>{ query }</em></h4>
            <ResultsTable content={data}/>
        </div>
    );
};

export default ResultsPage;

