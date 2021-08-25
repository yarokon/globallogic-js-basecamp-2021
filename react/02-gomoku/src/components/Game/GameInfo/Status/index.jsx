import Circle from '../../Board/Circle';
import { getNextPlayer } from '../../utils';

function Status({ winner, size, stepNumber }) {
  const getStatusRow = (text, stepNumber) => (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <span style={{ margin: 'auto 0' }}>{text}:</span>
      <div style={{ width: 5 }} />
      <Circle cell={getNextPlayer(stepNumber)} />
    </div>
  );

  const getStatus = () => {
    if (winner) {
      return getStatusRow('Winner', stepNumber - 1);
    } else if (stepNumber === size ** 2) {
      return 'Draw';
    } else {
      return getStatusRow('Next player', stepNumber);
    }
  };

  return <div className="Status">{getStatus()}</div>;
}

export default Status;
