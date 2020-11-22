import React from 'react'
import Question from './Question'

const QuestionsContainer =( props )=> {

    const questions = props.questions.map( ( question, index ) =>
        <Question
            key = { index }
            question = { question }
            increaseScore = { props.increaseScore }
            answerQuestion = { props.answerQuestion }
        />
    )

    return (
        <div>
            { questions }
        </div>
    )
}

export default QuestionsContainer