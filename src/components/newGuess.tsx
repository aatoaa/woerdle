import { useState, useEffect } from 'react';
import { wordLength } from './game';

interface IGuess {
  active?: boolean;
  handleSubmit?: (guess: string) => void;
}

function NewGuess({ active, handleSubmit }: IGuess) {
  const [guess, setGuess] = useState('');
  const guessLength = [...Array(wordLength).keys()]

  useEffect(() => {
    if (active) {
      window.addEventListener('keydown', handleKeyDown, false);
      return () => window.removeEventListener('keydown', handleKeyDown, false);
    }
  }, [guess]);

  return (
    <div className={`guess new-guess ${active ? 'active' : ''}`}>
      {guessLength.map((_, i) => (<span key={i}>{guess[i]}</span>))}
    </div>
  );

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if (guess.length === wordLength) {
        handleSubmit && handleSubmit(guess);
      }
      return;
    }
    if (e.key === 'Backspace') {
      setGuess((prev) => `${prev.slice(0, -1)}`);
      return;
    }
    if (!/[a-zåäöA-ZÅÄÖ]/.test(e.key) || e.key.length > 1) {
      return;
    }
    setGuess((prev) => {
      if (prev.length < wordLength) {
        return `${prev}${e.key}`;
      } else {
        return prev;
      }
    });
  }
}

export default NewGuess;
