import './App.css';
import EnterData from './Components/EnterData';
import { useState } from 'react';
import CompareWord from './Components/CompareWord';
import './WordGuess.css';

function App() 
{
  const [userWord , setUserWord] = useState('');
  return (
    <div className="App">
      <div className="top-container">
        <div className="word-guess">
          <EnterData OnInput={ (newWord) => setUserWord(newWord)} />
          <div className="display-message">
            { userWord && <CompareWord word={userWord} />}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;