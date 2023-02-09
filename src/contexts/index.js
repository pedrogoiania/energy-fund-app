import React from 'react';

import { AuthProvider } from './AuthContext';

function GlobalContext({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default GlobalContext;
