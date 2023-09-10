import GuessItem from './guess-filled';
import NewGuess from './guess-new';
import EmptyGuess from './guess-empty';
import { getCurrentGuess } from '../utils/utils';
import './guess.css';

interface IGuessRows {
  guessArr: string[][] | undefined;
  handleSubmit: (guess: string) => void;
  answer: string;
  done: boolean;
}

function GuessRows({ guessArr, handleSubmit, answer, done }: IGuessRows) {
  let rows = [];
  for (let i = 0; i < 6; i++) {
    // guess row with a value
    if (guessArr && guessArr[i] !== undefined) {
      const current = getCurrentGuess(guessArr[i]);
      rows.push(
        <GuessItem guess={guessArr[i]} key={i} win={current === answer} />,
      );
    }
    // current guess row
    else if ((i === guessArr?.length || i === 0) && !done) {
      rows.push(<NewGuess handleSubmit={handleSubmit} key={i} />);
    }
    // empty guess row
    else {
      rows.push(<EmptyGuess key={i} />);
    }
  }
  return rows;
}

export default GuessRows;
