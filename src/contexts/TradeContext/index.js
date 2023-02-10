import React, { createContext, useState, useMemo } from 'react';

const DEFAULT_VALUE = {
  selectedTrade: null,
  setSelectedTrade: () => {},
};

const TradeContext = createContext(DEFAULT_VALUE);

function TradeProvider({ children }) {
  const [selectedTrade, setSelectedTrade] = useState(
    DEFAULT_VALUE.selectedTrade,
  );

  const memoState = useMemo(
    () => ({
      selectedTrade,
      setSelectedTrade,
    }),
    [selectedTrade],
  );
  return (
    <TradeContext.Provider value={memoState}>{children}</TradeContext.Provider>
  );
}

export { TradeProvider };
export default TradeContext;
