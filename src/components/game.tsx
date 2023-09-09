import { useState, useEffect } from 'react';
import GuessRows from './guessRows';
import BtnNewGame from './btnNewGame';
import GameBackground from './gameBackground';
import Confetti from './confetti';
import { checkCharMatch, checkWordMatch, getWord, wordList } from './utils';

function Game() {
  const [answer, setAnswer] = useState(getWord(wordList));
  const [newGuess, setNewGuess] = useState('');
  const [guessArr, setGuessArr] = useState<string[][] | undefined>(undefined);
  const [done, setDone] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (newGuess.length > 0) {
      const guess = checkCharMatch(newGuess, answer);
      if (checkWordMatch(newGuess, answer)) {
        setWin(true);
        setDone(true);
      }
      let newArr = guessArr ? [...guessArr] : [];
      newArr.push(guess);
      setGuessArr(newArr);
      if (newArr.length === 6) setDone(true);
    }
  }, [newGuess]);

  useEffect(() => {
    if (done) {
      window.addEventListener('keydown', handleKeyDown, false);
      return () => window.removeEventListener('keydown', handleKeyDown, false);
    }
  }, [done]);

  return (
    <div className="game">
      <div className="game-container">
        <div className={`game-area ${done ? 'done' : ''}`}>
          <Confetti enable={win} />
          <GuessRows
            guessArr={guessArr}
            handleSubmit={handleSubmit}
            answer={answer}
            done={done}
          />
        </div>
        <div className="extras">
          <BtnNewGame disabled={!done} clickHandler={handleStart} />
        </div>
      </div>
      <GameBackground />
    </div>
  );

  function handleSubmit(guess: string) {
    setNewGuess(guess);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      handleStart();
      return;
    }
  }

  function handleStart() {
    setGuessArr(undefined);
    setNewGuess('');
    setDone(false);
    setWin(false);
    setAnswer(getWord(wordList));
  }
}

export default Game;
