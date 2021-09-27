import PlanInfo from './PlanInfo';

export default function ProfileText ( { member, setEditing } ) {

    return (
        <div>
            <h3 className={"mb-4 font-semibold text-lg text-center"}>Hi {member.name},
                welcome.</h3>
            <p><strong><u>Your details:</u></strong> &nbsp;</p>
            <p className="my-1"><strong>About me: &nbsp;</strong> {member.about} </p>
            <p className="my-1"><strong>Location: &nbsp;</strong> {member.location} </p>
            <p className="my-1"><strong>Instrument(s): &nbsp;</strong> primary/secondary </p>
            <p className="my-1"><strong>Acct status: &nbsp;</strong> active; </p>
            <p className="my-1"><strong>Date joined: &nbsp;</strong> {member.dateJoined} </p>
            <p className="my-1"><strong>Last login: &nbsp;</strong> {member.lastLogin} </p>

            { (member.hasPlan) ? <PlanInfo id={member.id}/> : "No practice plan set up yet"}

            <div className="flex flex-col items-center">
                <button className="w-32 h-8 my-4 border border-black rounded-md bg-purple-300 font-bold" onClick={() => {
                    setEditing(true);
                }}>Edit profile
                </button>
            </div>

        </div>
    );
}

//{member.lastLogin ? " back." : "."}