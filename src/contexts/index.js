import React from 'react';

import { AuthProvider } from './AuthContext';
import { TradeProvider } from './TradeContext';

function GlobalContext({ children }) {
  return (
    <AuthProvider>
      <TradeProvider>{children}</TradeProvider>
    </AuthProvider>
  );
}

export default GlobalContext;
