import History from './History';
import Status from './Status';
import './styles.scss';

function GameInfo({ winner, size, history, stepNumber, setStepNumber }) {
  return (
    <div className="GameInfo">
      <Status winner={winner} size={size} stepNumber={stepNumber} />

      <History history={history} stepNumber={stepNumber} setStepNumber={setStepNumber} />
    </div>
  );
}

export default GameInfo;
