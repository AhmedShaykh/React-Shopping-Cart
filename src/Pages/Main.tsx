import { FC } from 'react';
import {
    Box,
    Container,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';

const Main: FC = () => {
    return (
        <Box>
            <Container maxW={'5xl'}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}>
                    <Heading
                        fontWeight={'bold'}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Home Page
                    </Heading>
                    <Text color={'gray.500'} maxW={'3xl'}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eaque animi quisquam velit doloribus eligendi laudantium error temporibus autem eveniet atque deleniti est debitis, iusto assumenda sequi reiciendis fugit aperiam!
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
};

export default Main;