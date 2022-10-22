// import { useContext } from 'react';

import { AuthCredentials } from './AuthCredentials';
// import { AuthContext } from './AuthContext';
// import { useAuth } from './AuthContext';
import { useAuthContext } from './AuthContext';

const AuthInfo = () => {
  // const { toggle } = useAuth();
  // const context = useContext(AuthContext);
  const context = useAuthContext();

  const handleClick = () => {
    if (context) {
      context.toggle();
    }
  }

  return (
    <div>
      <AuthCredentials />
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export { AuthInfo };
