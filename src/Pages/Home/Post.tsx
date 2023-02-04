import { FC, useEffect, useState } from 'react';
import {
    addDoc,
    getDocs,
    collection,
    query,
    where,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Post as IPost } from "./Main";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../Config/Firebase";

interface Props {
    post: IPost;
};

interface Like {
    likeId: string;
    userId: string;
};

const Post: FC<Props> = ({ post }) => {

    const [user] = useAuthState(auth);

    const [likes, setLikes] = useState<Like[] | null>(null);

    const likesRef = collection(db, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(
            data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
        );
    };

    const addLike = async () => {
        try {
            const newDoc = await addDoc(likesRef, {
                userId: user?.uid,
                postId: post.id,
            });
            if (user) {
                setLikes((prev) =>
                    prev
                        ? [...prev, { userId: user.uid, likeId: newDoc.id }]
                        : [{ userId: user.uid, likeId: newDoc.id }]
                );
            }
        } catch (err) {
            console.log(err);
        }
    };

    const removeLike = async () => {
        try {
            const likeToDeleteQuery = query(
                likesRef,
                where("postId", "==", post.id),
                where("userId", "==", user?.uid)
            );

            const likeToDeleteData = await getDocs(likeToDeleteQuery);
            const likeId = likeToDeleteData.docs[0].id;
            const likeToDelete = doc(db, "likes", likeId);
            await deleteDoc(likeToDelete);
            if (user) {
                setLikes(
                    (prev) => prev && prev.filter((like) => like.likeId !== likeId)
                );
            }
        } catch (err) {
            console.log(err);
        }
    };

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

    useEffect(() => {
        getLikes();
    }, []);

    return (
        <Box my="4">
            <Box my='4'>
                <Heading
                    fontWeight={'bold'}
                    fontSize="4xl"
                    lineHeight={'110%'}
                >
                    {post.title}
                </Heading>
            </Box>
            <Box my='2'>
                <Text fontSize="xl" fontWeight="semibold">
                    {post.description}
                </Text>
            </Box>
            <Box my='4'>
                <Text fontSize="lg" fontWeight="semibold">
                    @{post.username}
                </Text>
                <Button
                    my="2"
                    onClick={hasUserLiked ? removeLike : addLike}
                >
                    {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
                </Button>
                <br />
                {likes && <Text> Likes: {likes?.length} </Text>}
            </Box>
        </Box>
    )
};

export default Post;