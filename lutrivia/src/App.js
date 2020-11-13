import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import QuestionsContainer from './components/QuestionsContainer';
import SubmitScore from './components/SubmitScore';
import questionsData from './data'

const App =( )=> {

  const [ questions, setQuestions ] = useState( [] )
  const [ name, setName ] = useState( '' )
  const [ highScore, setHighScore ] = useState( 0 )

  useEffect( ()=> {
    setQuestions( questionsData.questions )
  }, [] )

  const increaseScore =( )=> setHighScore( highScore + 1 )

  return (
    <div>
      <Header />
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
