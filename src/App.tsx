import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { baseUrl } from "./utils/const";
import { Question, QuestionInputType } from "./utils/type";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home";
import Create from "./page/create";
import Quiz from "./page/quiz";

function App() {
  const [take] = useState<string>("10")
  const [page, setPage] = useState<string>("1")
  const [questions, setQuestions] = useState<Question[]>([])

  const getQuestions  = async () => {
    const resp = await fetch(`${baseUrl}/questions?take=${take}&page=${page}`)
    const data = await resp.json() as Question[]
    setQuestions(data)
  }

  const nextQuestions = async () => {
    const nextPageNumber = (parseInt(page) + 1).toString()
    setPage(nextPageNumber)
    const resp = await fetch(`${baseUrl}/questions?take=${take}&page=${nextPageNumber}`)
    const data = await resp.json() as Question[]
    setQuestions(data)
  }

  const previousQuestion = async () => {
    const previousPageNumber = (parseInt(page) - 1).toString()
    if(previousPageNumber !== "0") {
      setPage(previousPageNumber)
      const resp = await fetch(`${baseUrl}/questions?take=${take}&page=${previousPageNumber}`)
      const data = await resp.json() as Question[]
      setQuestions(data)
    }
  }

  const newQuestion = async (data: QuestionInputType) => {
    const resp = await fetch(`${baseUrl}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const result = await resp.json() as Question
    const newQuestions = [...questions]
    newQuestions.push(result)
    setQuestions(newQuestions)
  }

  useEffect(() => {
    getQuestions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box p={5}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home questions={questions} nextQuestions={nextQuestions} previousQuestion={previousQuestion}/>}/>
          <Route path="create" element={<Create newQuestion={newQuestion}/>}/>
          <Route path="quiz" element={<Quiz/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
