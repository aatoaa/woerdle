import { useState, useEffect } from 'react';
import Guess from './guessListItem';
import NewGuess from './newGuess';
import { testCharMatch, wordLength } from './utils';

function Game() {
  let answer = 'tuutti';
  const [newGuess, setNewGuess] = useState('');
  const [guessArr, setGuessArr] = useState<string[][] | undefined>(undefined);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (newGuess.length > 0) {
      const guess = testCharMatch(newGuess, answer, setDone);
      let newArr = guessArr ? [...guessArr] : [];
      newArr.push(guess);
      setGuessArr(newArr);
      if (newArr.length === wordLength) setDone(true);
    }
  }, [newGuess]);

  return (
    <div className="game-container">
      <div className={`game-area ${done ? 'done' : ''}`}>{<RenderRows />}</div>
      <div className="extras">
        <button id="start" disabled={!done} onClick={handleStart}>
          New Game
        </button>
      </div>
    </div>
  );

  function RenderRows() {
    let res = [];
    for (let i = 0; i < wordLength; i++) {
      if (guessArr && guessArr[i] !== undefined) {
        res.push(<Guess guess={guessArr[i]} key={i} />);
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

  function handleStart() {
    setGuessArr(undefined);
    setNewGuess('');
    setDone(false);
  }
}

export default Game;
