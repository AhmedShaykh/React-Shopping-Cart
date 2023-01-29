import { FC } from 'react';
import { Link } from "react-router-dom";
import { auth } from "../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar: FC = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/login"> Login </Link>
            </div>

            <div className="user">
                {user && (
                    <>
                        <p> {user?.displayName} </p>
                        <img
                            src={user?.photoURL || ""}
                            width="20"
                            height="20"
                            style={{marginRight: "10px"}}
                        />

                        <button
                            style={{ marginLeft: "10px", backgroundColor: "rgb(245, 12, 16)" }}
                            onClick={signUserOut}
                        > Log Out</button>
                    </>
                )}
            </div>
        </div>
    )
};

export default Navbar;