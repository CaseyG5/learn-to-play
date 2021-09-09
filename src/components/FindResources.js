import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function FindResources( { handleSearch } ) {

    const queryTerms = useRef();            // OR use setSearchTerm(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        if(queryTerms.current.value === "") {
            console.log("Nothing to search for");
            return;
        }

        handleSearch(queryTerms.current.value);
    }

    return (

        <form className="mb-6 flex flex-col items-center" onSubmit={ onSubmit }  >
            <span className="font-bold underline">Search for sheets/lessons</span>
            <div className="my-4 flex flex-col">
                <label htmlFor="videos">
                    <input type="checkbox" name="videos" />
                    &nbsp;Video lessons
                </label>
                <label htmlFor="tabs">
                    <input type="checkbox" name="tabs" disabled />
                    &nbsp;Tablature
                </label>
                <label htmlFor="trad-sheet" >
                    <input type="checkbox" name="trad-sheet" disabled/>
                    &nbsp;Traditional sheet
                </label>
            </div>
            <label className="" htmlFor="skill-level">
                Choose skill level:
            </label>
            <select className="border" name="skill-level" disabled>
                <option value="">any</option>
                <option value="">Just starting</option>             { /* Jumping in cold */ }
                <option value="">Beginner-Intermediate</option>     { /* Getting warmed up */ }
                <option value="">Intermediate-Advanced</option>     { /* Feeling comfortable */ }
            </select>

            <div className="mt-6 flex">
                <input className="w-64 border px-3 focus:outline-none" ref={queryTerms} type="text" placeholder="blues guitar" />
                <button className="w-20 rounded-r bg-yellow-300 flex justify-center items-center" type={"submit"}>{ <FaSearch/> }</button>
            </div>
        </form>

    )
}
