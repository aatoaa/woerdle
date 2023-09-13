import { ReactNode } from 'react';
import Confetti from '../confetti';

interface IGameArea {
  done: boolean;
  win: boolean;
  children: ReactNode;
}

function GameArea({ done, win, children }: IGameArea) {
  return (
    <>
      <Confetti enable={win} />
      <div className={`game-area ${done ? 'done' : ''}`}>{children}</div>
    </>
  );
}

export default GameArea;
