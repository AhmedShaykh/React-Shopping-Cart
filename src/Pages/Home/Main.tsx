import { FC, useEffect, useState } from 'react';
import {
    Box,
    Container,
    Stack
} from '@chakra-ui/react';
import Post from './Post';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Config/Firebase";

export interface Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
};

const Main: FC = () => {

    const [postsList, setPostsList] = useState<Post[] | null>(null);

    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
        );
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Box>
            <Container maxW={'5xl'}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    py="15"
                >
                    {postsList?.map((post) => (
                        <Post post={post} />
                    ))}
                </Stack>
            </Container>
        </Box>
    )
};

export default Main;