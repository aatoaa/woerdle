import ConfettiExplosion from 'react-confetti-explosion';

interface IConfetti {
  enable: boolean;
}

function Confetti({ enable }: IConfetti) {
  return (
    <>
      {enable && (
        <div className="confetti">
          <ConfettiExplosion />
        </div>
      )}
    </>
  );
}

export default Confetti;
