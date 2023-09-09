interface IBtnNewGame {
  disabled: boolean;
  clickHandler: () => void;
}

function BtnNewGame({ disabled, clickHandler }: IBtnNewGame) {
  return (
    <button id="start" disabled={disabled} onClick={clickHandler}>
      NEW GAME
    </button>
  );
}

export default BtnNewGame;
