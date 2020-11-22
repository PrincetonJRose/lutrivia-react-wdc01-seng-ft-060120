import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import QuestionsContainer from './components/QuestionsContainer';
import ScoreDisplay from './components/ScoreDisplay';
import SubmitScore from './components/SubmitScore';
import questionsData from './data'

const App =( )=> {

  const [ questions, setQuestions ] = useState( [] )
  const [ name, setName ] = useState( ' ' )
  const [ highScore, setHighScore ] = useState( 0 )
  const [ currentScore, setCurrentScore ] = useState( 0 )

  useEffect( ()=> {
    resetQuestions()
  }, [] )

  const resetQuestions =( )=> {
    setQuestions( [] )
    setTimeout(() => {
      setQuestions( questionsData.questions )
    }, 1 );
    setCurrentScore( 0 )
  }

  const increaseScore =( )=> setCurrentScore( currentScore + 1 )

  return (
    <div>
      <Header
      />
      <br/>
      <ScoreDisplay
        newGame = { resetQuestions }
        currentScore = { currentScore }
        highScore = { highScore }
        name = { name }
      />
      <br/>
      <QuestionsContainer
        questions = { questions }
        increaseScore = { increaseScore }
      />
      <br/>
      <SubmitScore
      
      />
    </div>
  );
}

export default App;
