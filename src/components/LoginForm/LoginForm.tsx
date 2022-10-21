import { useState, FormEventHandler, useRef } from 'react';
import Confetti from 'react-confetti';

import { User } from '../../types/User';

type Props = {
  data?: User,
  onSubmit: (values: User) => void,
}

const LoginForm = ({ data, onSubmit }: Props) => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const email = emailFieldRef.current?.value || '';
    const password = passwordFieldRef.current?.value || '';
    const language = languageFieldRef.current?.value || '';

    console.log(email, password, language);
    setShowConfetti(true);

    onSubmit({email, password, language});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <p>E-mail: {emailFieldRef.current?.value} password: {passwordFieldRef.current?.value} language: {languageFieldRef.current?.value}</p> */}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" ref={emailFieldRef} onChange={() => null} type="text" defaultValue={data?.email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" ref={passwordFieldRef} type="password" defaultValue={data?.password} />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input id="language" ref={languageFieldRef} type="text" defaultValue={data?.language} />
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
