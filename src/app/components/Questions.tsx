"use client";
import { useDispatch, useSelector } from "react-redux";
import { useGetQuestionsQuery } from "../redux/api/quizApi";
import { useState, useEffect } from "react";
import { addQuestions } from "../redux/slices/quizSlice";

type question = {
  correctAnswer: string;
  question: string;
  incorrectAnswers: string[];
}

export default function Questions() {
  const [difficulty, setDifficulty] = useState("hard");
  const { data, isSuccess } = useGetQuestionsQuery(difficulty);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state?.quiz.questions);

  useEffect(() => {
    if (isSuccess && data) {
      data.forEach((question:question) => {
        dispatch(addQuestions(question.correctAnswer));
        question.incorrectAnswers.forEach((answer) => {
          dispatch(addQuestions(answer));
        });
      });
    }
  }, [data, isSuccess, dispatch]);

  return (
    <>
    <div className="flex justify-evenly pt-8 ">
    <button className="p-4 bg-orange-700 shadow-md shadow-black hover:-rotate-2 rounded-lg text-white" onClick={()=> setDifficulty("easy")}>Easy</button>
    <button className="p-4 bg-orange-700 shadow-md shadow-black hover:-rotate-2 rounded-lg text-white" onClick={()=> setDifficulty("medium")}>Medium</button>
    <button className="p-4 bg-orange-700 shadow-md shadow-black hover:-rotate-2 rounded-lg text-white" onClick={()=> setDifficulty("hard")}>Hard</button>
    </div>
    <div className="flex justify-center gap-16 pt-10 p-6">
      <div className="grid grid-cols-1 gap-8 w-1/4 self-start">
        <div className="text-2xl font-bold text-slate-800">Facts:</div>
        {data?.map((question:question, index:number) => (
          <div key={index} className="mb-2">
            <h1 className="text-base text-center">{question.question}</h1>
            <ul className=" flex flex-col items-center gap-5 list-disc ml-4 bg-orange-700 text-white p-4 mt-5 rounded-lg shadow-md shadow-black hover:-rotate-2">
              <li className=" list-none text-sm "><strong className=" w-1/5 p-4  hover:text-white">Correct Answer</strong> {question.correctAnswer}</li>
              {question.incorrectAnswers.map((answer, i) => (
                <li className=" list-none text-sm  " key={i}><strong className=" text-orange-700 opacity-5 p-4  hover:opacity-100 hover:text-white">Incorrect Answer</strong> {answer}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
