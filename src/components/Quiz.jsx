import { useState } from "react"

import QUESTIONS from '../questions.js'

export default function Quiz() {
    
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length > 0 ? userAnswers.length - 1 : 0

    function handleSelectedAnswers(selectedAnswer) {
             setUserAnswers((prevUserAnsers) => {
                return [...prevUserAnsers, selectedAnswer]
             })
    }
    return (
        <div>
            <h2 id="question">{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
                    <li key={index} className="answer">
                        <button onClick={() => {    handleSelectedAnswers(answer)}}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}