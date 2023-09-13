import { ReactNode } from 'react';

interface IGameContainer {
  children: ReactNode;
}

function GameContainer({ children }: IGameContainer) {
  return (
    <div className="woerdle">
      <div className="game">
        <div className="game-container">{children}</div>
      </div>
    </div>
  );
}

export default GameContainer;
