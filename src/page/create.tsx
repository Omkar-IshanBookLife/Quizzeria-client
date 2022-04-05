import { FunctionComponent } from "react";
import { QuestionInputType } from "../utils/type";
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { Box, Button, Input } from "@chakra-ui/react";

interface CreateProps {
    newQuestion: (data: QuestionInputType) => Promise<void>
}
 
const Create: FunctionComponent<CreateProps> = ({ newQuestion }) => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            "question": "",
            "author": "",
            "option1": "",
            "option2": "",
            "option3": "",
            "option4": "",
            "correct": 1,
            "description": "",
            "hint": "",
            "grade": 1,
            "subject": ""
        },
        onSubmit: async values => {
            await newQuestion(values)
            navigate("/")
        }
    })
    return ( 
        <div>
            <Box mb={4}>
                <form onSubmit={formik.handleSubmit}>
                    <Box mb={4}>
                        <label>Question</label>
                        <Input
                            name='question'
                            onChange={formik.handleChange}
                            value={formik.values.question}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Description</label>
                        <Input
                            name='description'
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Hint</label>
                        <Input
                            name='hint'
                            onChange={formik.handleChange}
                            value={formik.values.hint}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Grade</label>
                        <Input
                            name='grade'
                            onChange={formik.handleChange}
                            value={formik.values.grade}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Subject</label>
                        <Input
                            name='subject'
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Option1</label>
                        <Input
                            name='option1'
                            onChange={formik.handleChange}
                            value={formik.values.option1}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Option2</label>
                        <Input
                            name='option2'
                            onChange={formik.handleChange}
                            value={formik.values.option2}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Option3</label>
                        <Input
                            name='option3'
                            onChange={formik.handleChange}
                            value={formik.values.option3}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Option4</label>
                        <Input
                            name='option4'
                            onChange={formik.handleChange}
                            value={formik.values.option4}
                        />
                    </Box>
                    <Box mb={4}>
                        <label>Correct Option</label>
                        <Input
                            name='correct'
                            onChange={formik.handleChange}
                            value={formik.values.correct}
                        />
                    </Box>
                    <Button type="submit">Submit</Button>
                </form>
            </Box>
        </div>
    );
}
 
export default Create;