import { useContext } from 'react';

import { AuthContext } from './AuthContext';

const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <p>Is logged in: {context?.isLoggedIn ? 'Yes' : 'No'}</p>
    </div>
  );
}

export { AuthCredentials };
