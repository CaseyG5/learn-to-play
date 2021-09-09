import ResultRow from './ResultRow';

export default function ResultsTable( { content } ) {
    if( content[0] === undefined) {
        console.log("didn't get the data in time");
        return <div>Nothing to show</div>;
    };

    let id= "";
    let title = "";
    let desc = "";
    let img = "";
    let rows = [];

    for(let i=0; i<6; i++ ) {
        id = content[i]["id"]["videoId"];  // e.g. "VlwkuB4Rm0E"
        title = content[i]["snippet"]["title"];  // e.g. "Turnaround Blues Guitar Lesson"
        desc = content[i]["snippet"]["description"];  // "Guitar Lesson for 12 bar blues turnaround"
        img = content[i]["snippet"]["thumbnails"]["medium"]["url"];  // "https://i.ytimg.com/vi/VlwkuB4Rm0E/default.jpg"
        rows.push(<ResultRow imgURL={img} vidTitle={title} vidDesc={desc} vidID={id} key={id} />);
    }



    return (
        <table>
            <tbody>{rows}</tbody>
        </table>
    );
}


// FOR EXAMPLE
// id = "VlwkuB4Rm0E"
// title = "Turnaround Blues Guitar Lesson"
// desc = "Guitar Lesson for 12 bar blues turnaround"
// img = "https://i.ytimg.com/vi/VlwkuB4Rm0E/default.jpg"