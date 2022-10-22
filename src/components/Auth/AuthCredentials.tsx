// import { useContext } from 'react';
// import { AuthContext } from './AuthContext';

import { useAuthContext } from './AuthContext';

const AuthCredentials = () => {
  // const context = useContext(AuthContext);
  const context = useAuthContext();

  return (
    <div>
      <p>Is logged in: {context.isLoggedIn ? 'Yes' : 'No'}</p>
    </div>
  );
}

export { AuthCredentials };
