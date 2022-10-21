import { ChangeEventHandler, useState, useEffect, FormEventHandler } from 'react';
import Confetti from 'react-confetti';

const defaultUser = {
  email: '',
  password: '',
  language: '',
};

type User = typeof defaultUser;

const LoginFormControlled = () => {
  const [user, setUser] = useState<User>(defaultUser);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const language = user.language;

    if (language.includes('kura')) {
      setUser({
        ...user,
        language: '****',
      });
    }

    if (language === 'php') {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  // eslint-disable-next-line
  }, [user.language]);

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

    setUser({
      ...user,
      [fieldId]: fieldValue,
    });
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log('data: ', user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

export { LoginFormControlled };
