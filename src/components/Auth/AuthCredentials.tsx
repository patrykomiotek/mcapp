// import { useContext } from 'react';
// import { AuthContext } from './AuthContext';

import { useMemo, useCallback } from 'react';

import { useAuthContext } from './AuthContext';
import { Text } from '@atoms/Text';

const AuthCredentials = () => {
  // const context = useContext(AuthContext);
  const context = useAuthContext();

  // const result = useMemo(() => data, [deps]); // fn -> ()
  // const callback = useCallback(() => func, [deps]); // fn

  const handleClick = () => {
    context.toggle();
  }

  console.log('render: AuthCredentials component');

  return (
    <div>
      <Text>Is logged in: {context.isLoggedIn ? 'Yes' : 'No'}</Text>
      <Text>Hello!</Text>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export { AuthCredentials };
