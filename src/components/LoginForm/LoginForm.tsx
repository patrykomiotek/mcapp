import { ChangeEventHandler, useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleEmailChange = (event: ChangeEvent) => {
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <form>
        <div><p>E-mail: {email} password: {password}</p></div>
        <div>
          <label>E-mail</label>
          <input type="text" onChange={handleEmailChange} value={email} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={handlePasswordChange} value={password} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export { LoginForm };
