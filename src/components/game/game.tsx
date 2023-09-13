import { useState, useEffect } from 'react';
import GameContainer from './game-container';
import GameArea from './game-area';
import GuessRows from '../guess';
import Button from '../button';
import './game.css';

import {
  checkCharMatch,
  checkWordMatch,
  getWord,
  wordList,
} from '../utils/utils';

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
    <GameContainer>
      <GameArea done={done} win={win}>
        <GuessRows
          guessArr={guessArr}
          handleSubmit={handleSubmit}
          answer={answer}
          done={done}
        />
      </GameArea>
      <Button
        text={win ? `NEW GAME` : `TRY AGAIN`}
        clickHandler={handleStart}
        disabled={!done}
      />
    </GameContainer>
  );

  function handleSubmit(guess: string) {
    setNewGuess(guess.toLowerCase());
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
