import { LoginForm } from '@components/LoginForm';

import { User } from '@apptypes/User';

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
