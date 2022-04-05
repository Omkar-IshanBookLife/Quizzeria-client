import { Question } from './type';
import {atom} from "recoil"

export const questionAtom = atom<Question>({
    key:"question", 
    default: {
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
        "subject": "",
        id: 1,
        createdAt: "",
        updatedAt: ""
    }  
})