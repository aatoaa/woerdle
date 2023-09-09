import { wordLength } from './utils';

function EmptyGuess() {
  const guessLength = [...Array(wordLength).keys()];
  return (
    <div className={`guess new-guess`}>
      {guessLength.map((_, i) => (
        <span key={i}>{}</span>
      ))}
    </div>
  );
}

export default EmptyGuess;
