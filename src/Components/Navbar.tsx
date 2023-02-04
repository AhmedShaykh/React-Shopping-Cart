import { FC } from 'react';
import { Link } from "react-router-dom";
import { auth } from "../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Button } from '@chakra-ui/react';

const Navbar: FC = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Home </Link>

                {
                    !user ? (
                        <Link to="/"> Home </Link> && <Link to="/login"> Login </Link>
                    ) : (
                        <Link to="/home"> Home </Link> && <Link to="/post"> Post </Link>
                    )
                }

            </div>

            <div className="user">
                {user && (
                    <>
                        <p> {user?.displayName} </p>
                        <img
                            src={user?.photoURL || ""}
                            width="20"
                            height="20"
                            style={{ marginRight: "10px" }}
                        />

                        <Button
                            ml={4}
                            w="30"
                            bg="red"
                            color="white"
                            _hover={{
                                bg: "white",
                                color: "black"
                            }}
                            onClick={signUserOut}
                        > Log Out</Button>
                    </>
                )}
            </div>
        </div>
    )
};

export default Navbar;