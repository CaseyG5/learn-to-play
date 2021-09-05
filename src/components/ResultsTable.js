import ResultRow from './ResultRow';

export default function ResultsTable( { content } ) {
    if( content == undefined) {
        console.log("didn't get the data in time");
        return;
    };

    let id= "";
    let title = "";
    let desc = "";
    let img = "";
    let rows = [];

    for(let i=0; i<4; i++ ) {
        id = content[i]["id"]["videoID"];  // e.g. "VlwkuB4Rm0E"
        title = content[i]["snippet"]["title"];  // e.g. "Turnaround Blues Guitar Lesson"
        desc = content[i]["snippet"]["description"];  // "Guitar Lesson for 12 bar blues turnaround"
        img = content[i]["snippet"]["thumbnails"]["default"]["url"];  // "https://i.ytimg.com/vi/VlwkuB4Rm0E/default.jpg"
        rows.push(<ResultRow imgURL={img} vidTitle={title} vidDesc={desc} vidID={id} key={id} />);
    }



    return (
        <table>
            <tbody>{rows}</tbody>
        </table>
    );
}


// id = content[i].id["videoID"];  // e.g. "VlwkuB4Rm0E"
// title = content[i]["snippet"]["title"];  // e.g. "Turnaround Blues Guitar Lesson"
// desc = content[i]["snippet"]["description"];  // "Guitar Lesson for 12 bar blues turnaround"
// img = content[i]["snippet"]["thumbnails"]["default"]["url"];  // "https://i.ytimg.com/vi/VlwkuB4Rm0E/default.jpg"
// rows.push(<ResultRow imgURL={img} vidTitle={title} vidDesc={desc} vidID={id} />);

// id = "VlwkuB4Rm0E"
// title = "Turnaround Blues Guitar Lesson"
// desc = "Guitar Lesson for 12 bar blues turnaround"
// img = "https://i.ytimg.com/vi/VlwkuB4Rm0E/default.jpg"