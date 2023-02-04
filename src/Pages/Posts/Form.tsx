import { FC } from 'react';
import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";

interface CreateFormData {
    title: string;
    description: string;
};

const Form: FC = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description."),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });

        navigate("/");
    };

    return (
        <Box
            my="8"
            mx="20"
        >
            <form onSubmit={handleSubmit(onCreatePost)}>
                <Input
                    my="4"
                    placeholder='Enter Title ...'
                    {...register("title")}
                />
                <Text my="2" color="red"> {errors.title?.message}</Text>

                <Textarea
                    my="4"
                    placeholder='Enter Description ...'
                    {...register("description")}
                />
                <Text my="2" color="red"> {errors.description?.message}</Text>

                <Input
                    mt="2"
                    type='submit'
                    bg="teal"
                    w="50%"
                    color="white"
                    _hover={{
                        bg: "black",
                        cursor: "pointer"
                    }}
                />
            </form>
        </Box>
    )
};

export default Form;