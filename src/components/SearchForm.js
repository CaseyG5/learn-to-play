import {useRef, useState} from "react";
import { FaSearch } from 'react-icons/fa';
import axios from "axios";

// let searchTerms = "blues%2Cguitar%2Clesson";
// const API_KEY = "AIzaSyDOFCqZ9SFvSnuc9nKvchW-63Q_xvm1Mxg";
// const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=rating&q=${searchTerms}&key=${API_KEY}`;

// &fields=items(id,snippet)

const SearchForm = ( {handleSearch} ) => {

    //const searchTerms = useRef();

        // display search results on another page
        // go to   <ResultsPage searchString={searchTerms} />


    return (
        <form className="mb-6 flex flex-col items-center" onSubmit={handleSearch}>
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
                <input className="w-64 border px-3 focus:outline-none" type="text" placeholder="blues guitar" />
                <input className="w-20 rounded-r bg-yellow-300" type="submit" value="Search" />
            </div>
        </form>
    );
}


export default SearchForm;