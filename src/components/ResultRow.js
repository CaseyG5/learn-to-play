import { FaRegStar } from 'react-icons/fa';

export default function ResultRow( { imgURL, vidTitle, vidDesc, vidID, loggedIn, addToFaves }) {
    const vidURL = `https://www.youtube.com/watch?v=${vidID}`;

    return (
        <tr>
            <td>{<img src={imgURL} width="550" alt="thumbnail"/>}</td>
            <td className="pl-8 py-2 text-blue-600 underline">{<a href={vidURL} target="_blank">{vidTitle}</a>}</td>
            <td>
                { loggedIn ? <button className="" onClick={ () => { addToFaves(vidID, vidURL, vidTitle); } }>{<FaRegStar/>}</button>
                    : <span>Log in to save</span>
                }
            </td>
        </tr>
    );
}

// target="_blank"
// rel="noopener noreferrer"