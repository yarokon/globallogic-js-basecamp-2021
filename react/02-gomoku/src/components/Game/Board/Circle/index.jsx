import './styles.scss';

function Circle({ cell, isWinner, onClick }) {
  return (
    <div className="Circle" onClick={onClick}>
      <div className={`circle ${cell} ${isWinner ? 'winner' : ''}`} />
    </div>
  );
}

export default Circle;
