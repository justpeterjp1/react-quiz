import { useState, useCallback } from "react"

import QUESTIONS from '../questions.js'
import Question from "./Question.jsx"
import Summary
 from "./Summary.jsx"
export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([])
    
    const activeQuestionIndex =  userAnswers.length;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectedAnswers = useCallback((selectedAnswer) => {
       
        setUserAnswers((prevUserAnsers) => {
            return [...prevUserAnsers, selectedAnswer]
        })
    }, []);
    const handleSkipAnswer = useCallback(() => {
        handleSelectedAnswers(null)
    }, [handleSelectedAnswers])

    if (quizIsComplete) {
        return <Summary 
        
        userAnswers={userAnswers} />
    }
    // Be sure to place this lines here under this if statement
   

    return (
        <div id="quiz">
       <Question 
        key={activeQuestionIndex} 
        index={activeQuestionIndex}
        onSelectedAnswer={handleSelectedAnswers}
        onSkipAnswer={handleSkipAnswer}
       />
         </div>
    )
}