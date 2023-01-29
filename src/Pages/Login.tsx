import { FC } from 'react';
import { auth, provider } from "../Config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };

    return (
        <div>
            <h2>
                Sign In With Google To Continue!
            </h2>
            <button onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    )
};

export default Login;