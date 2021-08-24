import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw, depositAsync, withdrawAsync } from '../../actions/atm';

function Atm() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.atm);

  const DEPOSIT_AMOUNT = 10;
  const WITHDRAW_AMOUNT = 10;

  return (
    <div className="Atm">
      <div>
        <button
          onClick={() => {
            dispatch(deposit(DEPOSIT_AMOUNT));
          }}
        >
          Deposit ${DEPOSIT_AMOUNT}
        </button>{' '}
        <button
          disabled={balance < WITHDRAW_AMOUNT}
          onClick={() => {
            dispatch(withdraw(WITHDRAW_AMOUNT));
          }}
        >
          Withdraw ${WITHDRAW_AMOUNT}
        </button>
      </div>

      <br />

      <div>
        <button
          onClick={() => {
            dispatch(depositAsync(DEPOSIT_AMOUNT));
          }}
        >
          Deposit async ${DEPOSIT_AMOUNT}
        </button>{' '}
        <button
          disabled={balance < WITHDRAW_AMOUNT}
          onClick={() => {
            dispatch(withdrawAsync(WITHDRAW_AMOUNT));
          }}
        >
          Withdraw async ${WITHDRAW_AMOUNT}
        </button>
      </div>

      <br />

      <span>Balance: {balance}$</span>
    </div>
  );
}

export default Atm;
