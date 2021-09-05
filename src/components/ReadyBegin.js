

const ReadyBegin = () => {

    const beginPlan = () => {
        console.log("doing something");
    };

    return (
        <form className="mb-6 flex flex-col items-center" onSubmit={beginPlan}>
            <h3 className="font-bold underline">Ready to progress?</h3>
            <h4 className="text-md">Set a goal and make a plan.</h4>
            <input type="submit" value="Begin" className="w-20 mt-4 rounded bg-green-300" />
        </form>
    );
};

export default ReadyBegin;