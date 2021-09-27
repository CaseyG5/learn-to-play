import { useState } from 'react';
import ProfileText from '../ProfileText';
import ProfileEditForm from '../ProfileEditForm';
import supabase from '../../supabaseClient';
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import Config from '../../Config'

function DashboardPage( { member, setMember, setLoggedIn } ) {
    const [editing, setEditing] = useState(false);

    const updateProfile = async ( updates ) => {
        try {
            const response = await axios( {
                method: 'POST',
                url: `${Config.SUPA_URL}/rest/v1/userz?id=eq.${member.id}`,
                headers: {
                    "apikey": Config.SUPA_ADMIN_KEY,
                    "Authorization": `Bearer ${Config.SUPA_ADMIN_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "resolution=merge-duplicates"
                },
                data: {
                    "id": member.id,
                    "name": member.name,
                    "location": updates.location,
                    "created_at": member.dateJoined,
                    "updated_at": updates.lastLogin,
                    "about": updates.about,
                    "has_plan": member.hasPlan
                }
            }).then( (resp) => {
                console.log( "response to update request: ", resp );
            });
            // const {upsertError} = await supabase.from('userz').upsert(updates, {
            //     returning: "minimal",
            //     ignoreDuplicates: true,
            // });
            // if (upsertError) throw upsertError;
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