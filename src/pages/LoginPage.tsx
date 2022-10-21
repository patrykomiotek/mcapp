import { LoginForm } from '../components';

import { User } from '../types/User';

const defaultUser: User = {
  email: 'test@example.com',
  password: '',
  language: 'java',
};

const LoginPage = () => {

  const onSubmitHandler = (values: User) => {
    console.log('values: ', values);
    // send to api
  }

  return (
    <LoginForm data={defaultUser} onSubmit={onSubmitHandler} />
  );
}

export { LoginPage };
