"use server";

import { generateRandomNumberArray } from "./actions-util";

import { DUMMY_QUESTIONS_EASY } from "./dummy-questions-easy";
import { DUMMY_QUESTIONS_MEDIUM } from "./dummy-questions-medium";
import { DUMMY_QUESTIONS_HARD } from "./dummy-questions-hard";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getQuestionsDummy(level: string): Promise<any[]>{
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 5000) // simulate loading delay
  })

  const randomNumberArray = generateRandomNumberArray();
  //@ts-ignore
  const answerArray = []

  if (level === 'easy'){
    randomNumberArray.forEach((index) => answerArray.push(DUMMY_QUESTIONS_EASY[index]))
    //@ts-ignore
    return answerArray;
  } else if (level === "medium"){
    randomNumberArray.forEach((index) => answerArray.push(DUMMY_QUESTIONS_MEDIUM[index]))
    //@ts-ignore
    return answerArray
  } else {
    randomNumberArray.forEach((index) => answerArray.push(DUMMY_QUESTIONS_HARD[index]))
    //@ts-ignore
    return answerArray
  }
}