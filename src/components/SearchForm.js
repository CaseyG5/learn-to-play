import FindResources from "./FindResources";
import ReadyBegin from "./ReadyBegin";
import FindBuddy from "./FindBuddy";

const SearchForm = ( {handleSearch, loggedIn} ) => {

    return (
        <>
            <FindResources handleSearch={handleSearch}/>
            <ReadyBegin loggedIn={loggedIn}/>
            <FindBuddy loggedIn={loggedIn}/>
        </>
    );
}


export default SearchForm;