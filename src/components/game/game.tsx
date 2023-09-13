import { useState, useEffect } from 'react';
import { useGameStore } from '../../hooks/useGameStore';
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
  const done = useGameStore((state) => state.done);
  const win = useGameStore((state) => state.win);

  useEffect(() => {
    if (newGuess.length > 0) {
      const guess = checkCharMatch(newGuess, answer);
      if (checkWordMatch(newGuess, answer)) {
        useGameStore.setState({ win: true });
        useGameStore.setState({ done: true });
      }
      let newArr = guessArr ? [...guessArr] : [];
      newArr.push(guess);
      setGuessArr(newArr);
      if (newArr.length === 6) useGameStore.setState({ done: true });
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
      <GameArea>
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
    useGameStore.setState({ done: false });
    useGameStore.setState({ win: false });
    setAnswer(getWord(wordList));
  }
}

export default Game;
