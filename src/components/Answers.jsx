import { useRef } from "react"

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswersRef = useRef();

    if (!shuffledAnswersRef.current) {
            shuffledAnswersRef.current = [...answers]
            shuffledAnswersRef.current.sort(() => Math.random() - 0.5)
        }
        const shuffledAnswers = shuffledAnswersRef.current
    return  (
        <ul id="answers">
                {shuffledAnswers.map((answer, index) =>  {
                    let cssClass = '';
                    const isSelected = selectedAnswer === answer;
                    if (answerState === 'answered' && isSelected) {
                        cssClass = 'selected';
                    }

                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClass = answerState;
                    }

                    return <li key={index} className='answer'>
                        <button 
                        onClick={() => {onSelect(answer)}} 
                        className={cssClass} 
                        disabled={answerState !== ''}>
                            {answer}
                        </button>
                    </li>;
                }
                    
                )}
            </ul>
    )
    
}