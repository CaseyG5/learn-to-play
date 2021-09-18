import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProfileText from '../ProfileText';
import ProfileEditForm from '../ProfileEditForm';
import supabase from '../../supabaseClient';
import { FaSignOutAlt} from "react-icons/fa";

function DashboardPage( { member, setMember, setLoggedIn } ) {
    const [editing, setEditing] = useState(false);

    const updateProfile = async ( updates ) => {
        try {
            const {upsertError} = await supabase.from('members').upsert(updates, {
                returning: "minimal",
                ignoreDuplicates: true,
            });
            if (upsertError) throw upsertError;
        } catch (e) {
            alert(e.description || e.message );
        }
    }

    return (
        <div className="flex flex-col justify-between">
            <div className="">
                <h3 className="mb-6 text-center text-xl font-bold">Profile</h3>


                {editing ?
                    <ProfileEditForm member={member} setMember={setMember} updateProfile={updateProfile}
                                     setEditing={setEditing}/> :
                    <ProfileText member={member} setEditing={setEditing}/>
                }
            </div>

            <div className="flex justify-center">
                <button className=" flex" onClick={ async () => {
                    const {soError} = await supabase.auth.signOut();
                    if(soError) alert(error.description || error.message);
                    setLoggedIn(false);
                }}>{"Log out"} &nbsp; {<FaSignOutAlt size={30}/>} </button>
            </div>
        </div>
  );
}
export default DashboardPage;



/* ALTERNATIVE IDEA: USE 1 BUTTON and TOGGLE FUNCTIONS

        <button className="" onClick={ () => {
                // toggle editing, then
                // if !editing updateProfile()
            } }>
                { !editing ?
                    "Edit profile" :
                    "Accept changes"
                }
        </button>
 */