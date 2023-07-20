interface iGuess {
  guess: string[];
}

function Guess({ guess }: iGuess) {
  return (
    <div className="guess">
      {guess.map((l, i) => (
        <span className={getClass(l)} key={i}>
          {l[0]}
        </span>
      ))}
    </div>
  );

  function getClass(el: string) {
    const num = el.split('').pop() || 0;
    switch (+num) {
      case 0:
        return;
      case 1:
        return 'includes';
      case 2:
        return 'exact';
    }
  }
}

export default Guess;
