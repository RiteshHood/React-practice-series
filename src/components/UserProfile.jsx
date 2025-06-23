import { useState } from "react";
import './UserProfile.css';
function UserProfile(props) {
    const [name, setName] = useState(`${props.name}`);
    const [newName, setNewName] = useState(`${props.name}`);

    const [Bio, setBio] = useState(`${props.Bio}`);
    const [newBio, setNewBio] = useState(`${props.Bio}`);

    return (
        <div className="UserProfileCard">
            <h2>User Profile Card</h2>
            <h4>Name :{name} <br />Bio :{Bio}</h4>
         

            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /><br></br>
            <textarea type="text" value={newBio} onChange={(e) => setNewBio(e.target.value)} /><br></br>
            <button onClick={()=>{setName(newName);setBio(newBio)}}>Save Profile</button>
            <button onClick={()=>{setName(props.name);setBio(props.Bio);setNewName("");setNewBio("");}}>Reset Profile</button>


        </div>
    );

}

export default UserProfile;