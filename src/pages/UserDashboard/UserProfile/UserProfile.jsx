import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="p-20">
            <div>
                <div>
                    <img src={user.photoURL} alt="" />
                </div>
                <div>
                    <h1>{user.displayName}</h1>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;