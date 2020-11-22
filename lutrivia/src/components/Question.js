import React, { useState } from 'react'

const Question =( props )=> {

    const { text, answer } = props.question

    const [ status, setStatus ] = useState( false )
    const [ color, setColor ] = useState( '' )
    const [ chosen, setChosen ] = useState( null )
    
    const checkAnswer =( userAnswer )=> {
        if ( userAnswer === answer ) {
            setColor( 'correct-answer' )
            props.increaseScore()
        } 
        else 
            setColor( 'incorrect-answer' )

        setStatus( true )
        setChosen( userAnswer )
        props.answerQuestion()
    }

    return (
        <div className='question-box'>
            <div className='question'>
                <label>
                    { text }
                </label>
                <div className='question-buttons'>
                    <button
                        disabled = { status }
                        className = { chosen? color : null }
                        onClick = { () => checkAnswer( true ) }
                    >
                        True
                    </button>
                    <button 
                        disabled = { status }
                        className = { chosen === false? color : null }
                        onClick = { () => checkAnswer( false ) }
                    >
                        False
                    </button>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Question