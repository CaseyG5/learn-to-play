import {FaStar} from "react-icons/fa";

export default function SavedRow( {number, url, title} ) {

    return (
        <tr>
            <td>{number}</td>
            <td>
                <a href={url} target="_blank">{title}</a>
            </td>
            <td> <FaStar className="text-yellow-500" /> </td>
        </tr>
    );

}