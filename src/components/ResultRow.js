import {Link} from 'react-router-dom';

export default function ResultRow( { imgURL, vidTitle, vidDesc, vidID }) {
    const vidURL = `https://www.youtube.com/watch?v=${vidID}`
    return (
        <tr>
            <td>{<img src={imgURL} width="550" alt="thumbnail"/>}</td>
            <td className="pl-8 py-2 text-blue-600 underline">{<a href={vidURL} target="_blank">{vidTitle}</a>}</td>
        </tr>
    );
}

// target="_blank"
// rel="noopener noreferrer"


// <td>{imgURL}</td>
// <td>{vidURL}{''}{vidTitle}</td>
// <td>{vidDesc}</td>
//
// <td>{<span className="text-sm">{vidDesc}</span>}</td>