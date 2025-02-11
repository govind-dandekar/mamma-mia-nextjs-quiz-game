"use server";

import { DUMMY_QUESTIONS_EASY } from "./dummy-questions-easy";
import { DUMMY_QUESTIONS_MEDIUM } from "./dummy-questions-medium";
import { DUMMY_QUESTIONS_HARD } from "./dummy-questions-hard";


/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getQuestionsDummy(level: string): Promise<any>{
  // simulate API delay for "isPending" testing
  // Simulate an asynchronous operation with setTimeout
  // generated by nextjs docs AI
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 8000) // simulate delay
  })

  if (level === 'easy'){
    return DUMMY_QUESTIONS_EASY
  } else if (level === "medium"){
    return DUMMY_QUESTIONS_MEDIUM
  } else {
    return DUMMY_QUESTIONS_HARD
  }
}