import { ChangeEventHandler, useState } from 'react';
import Confetti from 'react-confetti';

const defaultUser = {
  email: '',
  password: '',
  language: '',
};

type User = typeof defaultUser;

const LoginForm = () => {
  const [user, setUser] = useState<User>(defaultUser);
  const [showConfetti, setShowConfetti] = useState(false);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [language, setLanguage] = useState('');

  // const handleEmailChange = (event: ChangeEvent) => {
  // const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setEmail(event.target.value);
  // }

  // const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setPassword(event.target.value);
  // }

  // const handleLanguageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setLanguage(event.target.value);
  // }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log('id:', event.target.id, ', value: ', event.target.value);

    const fieldId = event.target.id;
    let fieldValue = event.target.value;

    if (fieldValue.includes('kura')) {
      fieldValue = '****';
    }

    if (fieldId === 'language' && fieldValue === 'php') {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }

    setUser({
      ...user,
      [fieldId]: fieldValue,
    });
  }

  return (
    <div>
      <form>
        <div><p>E-mail: {user.email} password: {user.password} language: {user.language}</p></div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" onChange={handleInputChange} value={user.email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={handleInputChange} value={user.password} />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input id="language" type="text" onChange={handleInputChange} value={user.language} />
        </div>
        {/* {user.language.toLowerCase() === 'php' ?? <Confetti width={1000} height={600} />} */}
        {showConfetti && <Confetti width={1000} height={600} />}
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

export { LoginForm };
