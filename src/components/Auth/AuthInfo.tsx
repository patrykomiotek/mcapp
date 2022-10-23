// import { useContext } from 'react';

import { AuthCredentials } from './AuthCredentials';
// import { AuthContext } from './AuthContext';
// import { useAuth } from './AuthContext';
import { useAuthContext } from './AuthContext';
import { render } from '@testing-library/react';

const AuthInfo = () => {
  // const { toggle } = useAuth();
  // const context = useContext(AuthContext);
  // const context = useAuthContext();

  console.log('render: AuthInfo component');

  return (
    <div>
      <AuthCredentials />
    </div>
  );
}

export { AuthInfo };
