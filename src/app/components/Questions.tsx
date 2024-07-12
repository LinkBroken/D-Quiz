"use client";
import { useDispatch } from "react-redux";
import { useGetQuestionsQuery } from "../redux/api/quizApi";
import CorrectAnswers from "./CorrectAnswers";
import { question } from "../redux/slices/quizSlice";

export default function Questions() {
  const { data, isFetching } = useGetQuestionsQuery();
  const dispatch = useDispatch();
  const Questions = data?.map((questions) =>
    dispatch(question(questions.question))
  );
  // console.log(Questions)
  return (
    <div className="flex  w-full justify-evenly pt-8 font-sans italic">
      <div className="flex flex-col gap-8 w-1/2 p-2 border border-black shadow-md shadow-black  ">
        {Questions?.map((question, index) => (
          <h1 key={index}>{question.payload}</h1>
        ))}
      </div>
      <CorrectAnswers />
    </div>
  );
}
