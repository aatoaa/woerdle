import { useGameStore } from '../../hooks/useGameStore';
import { ReactNode } from 'react';
import Confetti from '../confetti';

interface IGameArea {
  children: ReactNode;
}

function GameArea({ children }: IGameArea) {
  const done = useGameStore((state) => state.done);
  const win = useGameStore((state) => state.win);

  return (
    <>
      <Confetti enable={win} />
      <div className={`game-area ${done ? 'done' : ''}`}>{children}</div>
    </>
  );
}

export default GameArea;
