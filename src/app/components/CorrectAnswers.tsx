"use client";
// import { data } from "./questions";
import { useDispatch } from "react-redux";
import { useGetQuestionsQuery } from "../redux/api/quizApi";
import { correctAnswers } from "../redux/slices/quizSlice";
import { useEffect, useState } from "react";

export default function CorrectAnswers() {
  const { data, isFetching } = useGetQuestionsQuery();
  const dispatch = useDispatch();
  const [Answers, setAnswers] = useState([]);
  useEffect(() => {
    const Correct = data?.map(
      (question, index) =>
        question.correctAnswer != "undefined"
          ? dispatch(correctAnswers(question.correctAnswer))
          : null
      //    console.log(question.correctAnswer);
    );
    isFetching ? null : setAnswers(Correct);
  }, [data, dispatch, isFetching]);

  return (
    <div className="flex flex-col gap-8 border text-center p-8 border-black shadow-md shadow-black">
      {Answers.length > 0
        ? Answers.map((item:string,index:number) => (
           <h1 key={index}>{item.payload}</h1>
        ))
        : null}
    </div>
  );
}
