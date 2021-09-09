import { FaSearch } from 'react-icons/fa';

const FindBuddy = () => {

    const buddySearch = (evt) => {
        evt.preventDefault();
        console.log("doing something");
    };

    return (
        <form className="mb-6 flex flex-col items-center" onSubmit={buddySearch}>
            <h3 className="font-bold underline">Already practicing?</h3>
            <h4 className="text-md">Find a practice partner or</h4>
            <h4 className="text-md">accountability buddy.</h4>
            <button type={"submit"} className="w-20 h-6 mt-4 rounded bg-blue-400 flex justify-center items-center" >{ <FaSearch /> }</button>
        </form>
    );
};

export default FindBuddy;