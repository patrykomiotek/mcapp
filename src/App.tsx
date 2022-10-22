import './App.css';
import { useRef, useEffect, useState } from 'react';
import type { MouseEventHandler } from 'react';

import { Text } from './ui';
import { Generator } from './components';
// import { LoginFormControlled } from './components';
import { LoginForm } from './components';
import { LoginPage } from './pages';
import { MagicButton } from './ui';
import { Viewport } from '@components/Viewport';
import { AuthInfo } from '@components/Auth';
import { AuthContext } from '@components/Auth';

const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const button = buttonRef.current
    if (button) {
      button.style.backgroundColor = 'red';
      button.style.color = 'white';
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    const button = buttonRef.current
    if (button) {
      button.style.backgroundColor = 'green';
      button.style.color = 'white';
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <div className="App">
        {/* <Text>Today is payday</Text> */}
        {/* <Generator /> */}
        {/* <LoginForm /> */}
        {/* <LoginPage /> */}
        {/* <Viewport /> */}
        {/* <MagicButton
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
        >
          Click me, please!
        </MagicButton> */}
        <AuthInfo />
        <button onClick={() => setIsLoggedIn((value) => !value)}>Toggle</button>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
