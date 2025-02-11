function CorrectVSIncorrectAlert({ answerSubmitted, selectedAnswer }) {
  return (
    <div
      className={
        !answerSubmitted
          ? "text-3xl mt-2 invisible py-2 rounded-xl px-4"
          : answerSubmitted && selectedAnswer.flag
          ? "text-3xl mt-2 py-2 rounded-xl px-6 bg-emerald-800"
          : "text-3xl mt-2 py-2 rounded-xl px-6 bg-fuchsia-800"
      }
    >
      {selectedAnswer.flag ? <p>Correct!</p> : <p>Incorrect</p>}
    </div>
  );
}

export default CorrectVSIncorrectAlert;
