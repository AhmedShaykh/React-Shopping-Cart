import { FC } from 'react';
import { auth, provider } from "../Config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Heading } from '@chakra-ui/react';

const Login: FC = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };

    return (
        <div>
            <Heading my="4">
                Sign In With Google To Continue!
            </Heading>
            <Button
                bg="rgb(9, 115, 191)"
                color="white"
                _hover={{
                    bg: "gray.600",
                }}
                onClick={signInWithGoogle}>
                Sign In With Google
            </Button>
        </div>
    )
};

export default Login;