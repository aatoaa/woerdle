import { useState, useEffect } from 'react';
import Guess from './guessListItem';
import NewGuess from './newGuess';

function Game() {
  let answer = 'tuutti';
  const [newGuess, setNewGuess] = useState('');
  const [guessArr, setGuessArr] = useState<string[][] | undefined>(undefined);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (newGuess.length > 0) {
      const guess = testCharMatch(newGuess, answer);
      let newArr = guessArr ? [...guessArr] : [];
      newArr.push(guess);
      setGuessArr(newArr);
      if (newArr.length === 6) setDone(true);
    }
  }, [newGuess]);

  return (
    <div className="game-container">
      <div className={`game-area ${done ? 'done' : ''}`}>
        {<RenderRows />}
      </div>
      <div className="extras">
        <button id="start" disabled={!done} onClick={handleStart}>
          New Game
        </button>
      </div>
    </div>
  );

  function RenderRows() {
    let res = [];
    for (let i = 0; i < 6; i++) {
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

  function testCharMatch(guess: string, answer: string) {
    let count = 0;
    let matchResult: string[] = ['','','','','','',];
    let availableChars = answer;
    let usedIndex: number[] = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        matchResult.splice(i, 1, `${guess[i]}: 2`);
        count += 2;
        availableChars = availableChars.replace(guess[i], "");
        usedIndex.push(i);
      }
    }
    for (let i = 0; i < guess.length; i++) {
      if (answer.includes(guess[i]) && availableChars.includes(guess[i]) && !usedIndex.includes(i)) {
        matchResult.splice(i, 1, `${guess[i]}: 1`);
        count += 1;
        availableChars = availableChars.replace(guess[i], "");
        usedIndex.push(i);
      } else if (!usedIndex.includes(i)) {
        matchResult.splice(i, 1, `${guess[i]}: 0`);
        usedIndex.push(i);
      }
    }
    if (count === 12) setDone(true);
    return matchResult;
  }
}

export default Game;
