import React from 'react'

const SubmitScore =( props )=> {

    return (
        <div className='submit-score'>
            <input
                type='text'
                placeholder='Enter name'
                onChange = { null }
            />
            <button
                onClick = { null }
            >
                Submit score!
            </button>
        </div>
    )
}

export default SubmitScore