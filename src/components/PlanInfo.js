
export default function PlanInfo( { savedVids } ) {

    return (
        <div className="my-5">
            <h3 className="font-bold underline">Your practice plan:</h3>
            <p className="my-1"><strong>Instrument: &nbsp;</strong> electric guitar</p>
            <p className="my-1"><strong>Session: &nbsp;</strong> 1 short hour</p>
            <p className="my-1"><strong>Days: &nbsp;</strong> SUN thru THURS</p>
            <p className="my-1">You practiced 5 hours last week, that's great!</p>
            <p className="mt-12 text-sm"><em>&ldquo;A journey of 1,000 miles begins with a single step.&rdquo;</em></p>

            <table className="my-6">
                <thead>
                    <tr><th></th><th>Saved videos:</th></tr>
                </thead>
                <tbody>
                    {savedVids}
                </tbody>
            </table>

        </div>
    );
}