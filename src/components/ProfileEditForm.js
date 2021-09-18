import { useState, useRef } from 'react';

export default function ProfileEditForm ( { member, setMember, updateProfile, setEditing } ) {
    // const [name, setName] = useState(member.name);
    // const [about, setAbout] = useState(member.about);
    // const [location, setLocation] = useState(member.location);
    // const [instruments, setInstruments] = useState(member.instruments);

    const name = useRef(`${member.name}`);
    const about = useRef(member.about);
    const location = useRef(member.location);
    const instruments = useRef(member.instruments);

    console.log(member.name + " - " + member.about + " - " + member.location);
    console.log( name + " - " + name.current + " - " + name.current.value  );

    const handleUpdate = (evt) => {
        evt.preventDefault();

        const updates = {
            name: name.current.value,
            about: about.current.value,
            location: location.current.value,
            instruments: instruments.current.value
        };

        setMember( updates );
        updateProfile( updates );

        setEditing(false);
    }

    return (
        <form className="mb-72 flex flex-col" onSubmit={handleUpdate}>
            <h3 className={"mb-4 font-semibold text-lg text-center"}>Enter your changes below.</h3>
            <p><strong><u>Info to update:</u></strong> &nbsp;</p>
            <label className="my-0.5 flex justify-between" htmlFor="name">
                <strong>Name:</strong> &nbsp;<input className="w-56 border border-black rounded-sm" type="text" name="name" ref={name} autoComplete="off" />
            </label>
            <label className="my-0.5 flex justify-between" htmlFor="about">
                <strong>About:</strong> &nbsp;<input className="w-56 border border-black rounded-sm" type="text" name="about" ref={about} autoComplete="off" />
            </label>
            <label className="my-0.5 flex justify-between" htmlFor="location">
                <strong>Location:</strong> &nbsp;<input className="w-56 border border-black rounded-sm" type="text" name="location" ref={location} autoComplete="off" />
            </label>
            <label className="mt-0.5 flex justify-between" htmlFor="instruments">
                <strong>Instruments:</strong> &nbsp;<input className="w-56 border border-black rounded-sm" type="text" name="instruments" ref={instruments} autoComplete="off" />
            </label>

            <div className="mt-6 mb-3.5 flex justify-around">
                <button className="w-32 h-8  border border-black rounded-md bg-green-300 font-bold" type="submit">Change</button>

                <button className="w-32 h-8 border border-black rounded-md bg-red-300 font-bold" onClick={() => {
                    setEditing(false);
                }}>Cancel
                </button>
            </div>
        </form>
    )

}

// onChange={ (evt) => {  setName(evt.target.value); }}