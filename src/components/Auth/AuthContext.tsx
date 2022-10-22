import { useState, createContext, useContext } from 'react';

type Auth = {
  isLoggedIn: boolean;
  logIn: () => void,
  logOut: () => void,
  toggle: () => void,
  // setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

// const defaultValues: Auth = {
//   isLoggedIn: false,
//   // logIn: () => null,
// }

const AuthContext = createContext<Auth | null>(null);
AuthContext.displayName = 'AuthContext';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [state, dispatch] = useReducer(false);

  const logIn = () => setIsLoggedIn(true);

  const logOut = () => setIsLoggedIn(false);

  const toggle = () => {
    console.log('toggle here ');
    setIsLoggedIn(value => !value);
  }

  return { isLoggedIn, logIn, logOut, toggle };
}

type Props = {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const { isLoggedIn, logIn, logOut, toggle } = useAuth();
  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn,
      logOut,
      toggle,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Oh no! You need to wrap component by AuthProvider');
  }

  return context;
}

export { AuthProvider, AuthContext, useAuthContext };
