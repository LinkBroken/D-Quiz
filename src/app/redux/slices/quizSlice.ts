import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: "quiz",
    initialState: [],
    reducers: {
        addQuestions: (state, action)=>{
            state.push(action?.payload)
        }
    }
})
export const {addQuestions} = quizSlice.actions;
export default quizSlice.reducer;