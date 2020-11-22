import React from 'react'

const SubmitScore =( props )=> {

    const { questionsAnswered, totalQuestions, setPlayerName, submitScore } = props

    return (
        <form
            className='submit-score'
            onSubmit = { (e) => {
                e.preventDefault()
                e.target.reset()
            } }
        >
            <input
                type='text'
                placeholder=' Enter name...'
                onChange = { (e) => setPlayerName( e.target.value ) }
            />
            <button
                disabled = { questionsAnswered === totalQuestions ? false : true }
                onClick = { (e) => submitScore() }
            >
                Submit score!
            </button>
        </form>
    )
}

export default SubmitScore