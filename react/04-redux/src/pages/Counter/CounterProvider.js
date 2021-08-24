import { createContext, useState } from 'react';

export const CounterContext = createContext([0, prevCounts => {}]);

function CounterProvider({ children }) {
  const state = useState(0);

  return <CounterContext.Provider value={state}>{children}</CounterContext.Provider>;
}

export default CounterProvider;
