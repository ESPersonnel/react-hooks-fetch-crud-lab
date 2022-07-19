import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        <QuestionItem question={questions[0]} />
      </ul>
    </section>
  );
}

export default QuestionList;
