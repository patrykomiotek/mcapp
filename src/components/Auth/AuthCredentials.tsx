// import { useContext } from 'react';
// import { AuthContext } from './AuthContext';

import { useAuthContext } from './AuthContext';

const AuthCredentials = () => {
  // const context = useContext(AuthContext);
  const context = useAuthContext();

  const handleClick = () => {
    context.toggle();
  }

  console.log('AuthCredentials component');

  return (
    <div>
      <p>Is logged in: {context.isLoggedIn ? 'Yes' : 'No'}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export { AuthCredentials };
