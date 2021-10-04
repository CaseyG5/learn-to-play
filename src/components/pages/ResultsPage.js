
import ResultsTable from '../ResultsTable';

const ResultsPage = ( {data, query, addToFaves, loggedIn} ) => {

    return (
        <div className="text-center">
            <h3 className="font-bold underline">Showing search results:</h3>
            <h4 className="mb-6 text-md">videos for: <em>{ query }</em></h4>
            <ResultsTable content={data} loggedIn={loggedIn} addToFaves={addToFaves} />
        </div>
    );
};

export default ResultsPage;

