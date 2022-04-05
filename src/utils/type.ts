export type Question = {
    "id": number,
    "createdAt": string,
    "updatedAt": string,
    "question": string,
    "author": string,
    "option1": string,
    "option2": string,
    "option3": string,
    "option4": string,
    "correct": number,
    "description": string,
    "hint": string,
    "grade": number,
    "subject": string
}

export type QuestionInputType = {
    "question": string,
    "author": string,
    "option1": string,
    "option2": string,
    "option3": string,
    "option4": string,
    "correct": number,
    "description": string,
    "hint": string,
    "grade": number,
    "subject": string
}

