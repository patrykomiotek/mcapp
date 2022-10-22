import { useState, FormEventHandler, useRef, useEffect } from 'react';
import Confetti from 'react-confetti';

import { User } from '@apptypes/User';
import { Input } from '@atoms/Input';
import { useViewport } from '@hooks/useViewport';

type Props = {
  data?: User,
  onSubmit: (values: User) => void,
}

const LoginForm = ({ data, onSubmit }: Props) => {
  const size = useViewport();
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (emailFieldRef.current) {
      emailFieldRef.current.focus();
    }
  }, []);

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
        <Input
          ref={emailFieldRef}
          id="email"
          label="E-mail"
          style={{ backgroundColor: 'yellow' }}
        />
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" ref={passwordFieldRef} type="password" defaultValue={data?.password} />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input id="language" ref={languageFieldRef} type="text" defaultValue={data?.language} />
        </div>
        {/* {user.language.toLowerCase() === 'php' ?? <Confetti width={1000} height={600} />} */}
        {showConfetti && <Confetti width={size.x} height={size.y} />}
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

export { LoginForm };
