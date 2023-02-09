import React, { createContext, useState, useMemo } from 'react';

const DEFAULT_VALUE = {
  isAuth: true,
  setIsAuth: () => {},
};

const AuthContext = createContext(DEFAULT_VALUE);

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(DEFAULT_VALUE.isAuth);

  const memoState = useMemo(
    () => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth],
  );
  return (
    <AuthContext.Provider value={memoState}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
