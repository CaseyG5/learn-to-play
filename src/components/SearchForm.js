import FindResources from "./FindResources";
import ReadyBegin from "./ReadyBegin";
import FindBuddy from "./FindBuddy";

const SearchForm = ( {handleSearch, setPage} ) => {

    return (
        <>
            <FindResources handleSearch={handleSearch}/>
            <ReadyBegin setPage={setPage}/>
            <FindBuddy setPage={setPage}/>
        </>
    );
}


export default SearchForm;