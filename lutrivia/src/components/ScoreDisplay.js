import React from 'react'

const ScoreDisplay =( props )=> {

    const { name, highScore, currentScore, newGame } = props

    return (
        <div className='score-div'>
            <div className='new-game-button-div'>
                <button 
                    className='new-game-button'
                    onClick = { () => newGame() }
                >
                    <h4 className='button-h4'>
                        New Game
                    </h4>
                </button>
            </div>
            <div className='score-display'>
                <div>
                    High Score: { highScore }
                </div>
                <div>
                    By: { name }
                </div>
                <div>
                    Your Score: { currentScore }
                </div>
            </div>
        </div>
    )
}

export default ScoreDisplay