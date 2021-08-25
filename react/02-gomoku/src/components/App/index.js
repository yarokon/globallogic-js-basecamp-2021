import Game from '../Game';
import { BOARD_SIZE } from '../Game/constants';

function App() {
  return (
    <div className="App">
      <Game size={BOARD_SIZE} />
    </div>
  );
}

export default App;
