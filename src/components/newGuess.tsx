import { useState, useEffect } from 'react';

interface IGuess {
  active?: boolean;
  handleSubmit?: (guess: string) => void;
}

function NewGuess({ active, handleSubmit }: IGuess) {
  const [guess, setGuess] = useState('');

  useEffect(() => {
    if (active) {
      window.addEventListener('keydown', handleKeyDown, false);
      return () => window.removeEventListener('keydown', handleKeyDown, false);
    }
  }, [guess]);

  return (
    <div className={`guess new-guess ${active ? 'active' : ''}`}>
      <span>{guess[0]}</span>
      <span>{guess[1]}</span>
      <span>{guess[2]}</span>
      <span>{guess[3]}</span>
      <span>{guess[4]}</span>
      <span>{guess[5]}</span>
    </div>
  );

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if (guess.length === 6) {
        handleSubmit && handleSubmit(guess);
      }
      return;
    }
    if (e.key === 'Backspace') {
      setGuess((prev) => `${prev.slice(0, -1)}`);
      return;
    }
    if (!/[a-zåäöA-ZÅÄÖ]/.test(e.key) || e.key.length > 1) {
      e.preventDefault();
      return;
    }
    setGuess((prev) => {
      if (prev.length < 6) {
        return `${prev}${e.key}`;
      } else {
        return prev;
      }
    });
  }
}

export default NewGuess;
