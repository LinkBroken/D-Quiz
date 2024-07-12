import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    question: [],
    category: "",
    correctAnswers:[],
    difficulty: "",
    incorrectAnswers: [],
}
const quiz = createSlice({
    name: "quiz",
    initialState,
    reducers:{
        getQuestions: (state, action) => {
            state = action.payload
    },
        incorrectAnswers: (state, action) => {
            state.incorrectAnswers.push(action.payload)
        },
        correctAnswers: (state, action) => {

            state.correctAnswers.push(action.payload)
        },
        category: (state, action) => {
            state.category = action.payload
        },
        difficulty: (state, action) => {
            state.difficulty = action.payload
        },
        question: (state, action) => {
            state.question.push(action.payload)
        }
    }
})

export default quiz.reducer
export const { getQuestions,incorrectAnswers, category, difficulty, question,correctAnswers } = quiz.actions