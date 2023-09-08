interface iGuess {
  guess: string[];
  win: boolean;
}

function Guess({ guess, win }: iGuess) {
  return (
    <div className={`guess ${win ? 'win' : ''}`}>
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
