/* eslint-disable no-restricted-globals */
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";

const Navbar = () => {
    return ( 
        <Box p={1} background={"coral"}>
            <Flex alignItems={"center"}>
                <Box p='4'>
                    <Heading size='md' onClick={() => location.href = "/"}>Quizzeria</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button colorScheme='teal' mr='3' onClick={() => location.href = "/create"}>
                    Create
                    </Button>
                    <Button colorScheme='teal' onClick={() => location.href = "/quiz"}>Quiz</Button>
                </Box>
            </Flex>
        </Box>
    );
}
 
export default Navbar;