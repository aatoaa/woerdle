import { useState, useEffect } from 'react';
import Guess from './guessListItem';
import NewGuess from './newGuess';
import BtnNewGame from './btnNewGame';
import BackgroundGradient from './backgroundGradient';
import Confetti from './confetti';
import * as utils from './utils';

function Game() {
  const [answer, setAnswer] = useState(utils.getWord(utils.wordList));
  const [newGuess, setNewGuess] = useState('');
  const [guessArr, setGuessArr] = useState<string[][] | undefined>(undefined);
  const [done, setDone] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (newGuess.length > 0) {
      const guess = utils.checkCharMatch(newGuess, answer);
      if (utils.checkWordMatch(newGuess, answer)) {
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
          <RenderRows />
        </div>
        <div className="extras">
          <BtnNewGame disabled={!done} clickHandler={handleStart} />
        </div>
      </div>
      <BackgroundGradient />
    </div>
  );

  function RenderRows() {
    let res = [];
    for (let i = 0; i < 6; i++) {
      if (guessArr && guessArr[i] !== undefined) {
        const current = utils.getCurrentGuess(guessArr[i]);
        res.push(
          <Guess guess={guessArr[i]} key={i} win={current === answer} />,
        );
      } else if ((i === guessArr?.length || i === 0) && !done) {
        res.push(
          <NewGuess active={true} handleSubmit={handleSubmit} key={i} />,
        );
      } else {
        res.push(<NewGuess key={i} />);
      }
    }
    return res;
  }

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
    setAnswer(utils.getWord(utils.wordList));
  }
}

export default Game;
