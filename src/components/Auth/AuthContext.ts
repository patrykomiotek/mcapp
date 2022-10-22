import { createContext } from 'react';

type Auth = {
  isLoggedIn: boolean;
}

const defaultValues: Auth = {
  isLoggedIn: false,
}

const AuthContext = createContext<Auth>(defaultValues);
AuthContext.displayName = 'AuthContext';

export { AuthContext };
