import { useState } from "react"
import Answers from "./Answers"
import QuestionTimer from "./QuestionTimer"
import QUESTIONS from '../questions'
export default function Question({ index, onSelectedAnswer, onSkipAnswer, }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect) {
        timer = 2000;
    }
    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
            selectedAnswer: answer,
            isCorrect: QUESTIONS[index].answers[0] === answer
        })

        setTimeout(() => {
            onSelectedAnswer(answer)
        }, 2000)
        }, 1000)
    }

    let answerState = ''
    
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
         <div id="question">
            <QuestionTimer
                key={timer}
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
                timeout={timer}
                mode={answerState}
            />
            <h2 >{QUESTIONS[index].text}</h2>
            <Answers 
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
           </div>
    )
}