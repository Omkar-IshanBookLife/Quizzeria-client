import { Box, Button, Flex, Heading, Radio, RadioGroup, Spacer, Text } from "@chakra-ui/react";
import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { baseUrl } from "../utils/const";
import { Question } from "../utils/type";

interface QuizProps {
    
}
 
const Quiz: FunctionComponent<QuizProps> = () => {
    const [question, setQuestion] = useState<Question>()
    const [score, setScore] = useState<number>(0)
    const [option, setOption] = useState<string>("1")

    const getRandomQuestion = async () => {
        const resp = await fetch(`${baseUrl}/questions/random`)
        const data = await resp.json() as Question
        setQuestion(data)
    }
    
    useEffect(() => {
        const defaultScore = parseInt(localStorage.getItem("score")!) || 0
        setScore(defaultScore)
        getRandomQuestion()
    }, [])

    const submitQuestion = (e: FormEvent) => {
        e.preventDefault()
        if(parseInt(option) === question?.correct) {
            alert("Correct")
            const newScore = score + 50
            setScore(newScore)
            localStorage.setItem("score", newScore.toString())
            getRandomQuestion()
        }
        else{
            alert("Wrong")
            setScore(0)
            localStorage.removeItem("score")
            getRandomQuestion()
        }
        setOption("0")
    }

    return ( 
        <Box m={4}>
            <Flex>
                <Heading size={"md"} mb={8}>Question: {question?.question}</Heading>
                <Spacer/>
                <Text>Score: {score}</Text>
            </Flex>
            <form onSubmit={e => submitQuestion(e)}>
                <RadioGroup onChange={setOption} value={option}>
                    <Radio value={"1"}>1. {question?.option1}</Radio><br />
                    <Radio value={"2"}>2. {question?.option2}</Radio><br />
                    <Radio value={"3"}>3. {question?.option3}</Radio><br />
                    <Radio value={"4"}>4. {question?.option4}</Radio><br />
                </RadioGroup><br />
                <Button type="submit">Submit</Button>
            </form><br />
        </Box>
    );
}
 
export default Quiz;