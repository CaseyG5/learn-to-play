import FindResources from "./FindResources";
import ReadyBegin from "./ReadyBegin";
import FindBuddy from "./FindBuddy";

const SearchForm = ( {handleSearch, setPage} ) => {

    return (
        <div className="flex flex-col items-center">
            <h1 className="p-2 text-3xl font-bold bg-indigo-100">L2P logo</h1>
            <h2 className="text-xl">Learn to Play</h2>
            <h3 className="mb-8 text-xl">ANY instrument</h3>
            <FindResources handleSearch={handleSearch}/>
            <ReadyBegin setPage={setPage}/>
            <FindBuddy setPage={setPage}/>
        </div>
    );
}


export default SearchForm;