import './button.css';

interface IBtnNewGame {
  text?: string;
  disabled?: boolean;
  clickHandler: () => void;
}

function BtnNewGame({
  text = 'Click',
  clickHandler,
  disabled = false,
}: IBtnNewGame) {
  return (
    <button
      id="start"
      onClick={clickHandler}
      disabled={disabled}
      className={`btn`}
    >
      {text}
    </button>
  );
}

export default BtnNewGame;
