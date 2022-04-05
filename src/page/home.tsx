import { Heading, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Flex, Button } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Question } from "../utils/type";

interface HomeProps {
    questions: Question[]
    nextQuestions: () => Promise<void>
    previousQuestion: () => Promise<void>
}
 
const Home: FunctionComponent<HomeProps> = ({ questions, nextQuestions, previousQuestion }) => {
    return ( 
        <div>
            {
                (() => {
                    if(questions.length !== 0) { 
                        return (
                            <div>
                                <Heading size={"md"} mb="4">Available Questions</Heading>
                                <Accordion mb={8}>
                                    {questions.map(question => {
                                    return (
                                        <AccordionItem key={question.id}>
                                        <h2>
                                            <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                Question: {question.question}
                                            </Box>
                                            <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <strong>Description: </strong>{question.description} <br />
                                            <strong>Added by,</strong> {question.author}
                                        </AccordionPanel>
                                        </AccordionItem>
                                    )
                                    })}
                                </Accordion>
                            </div>
                        )
                    }
                    else {
                        return <p>No Questions Available</p>
                    }
                })()
            }
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Button mr={2} onClick={async () => await previousQuestion()}>Previous</Button>
                <Button onClick={async () => await nextQuestions()}>Next</Button>
            </Flex>
        </div>
     );
}
 
export default Home;