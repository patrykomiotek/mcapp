import './App.css';
import { useRef, useEffect, useState } from 'react';
import type { MouseEventHandler } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Text } from './ui';
import { Generator } from './components';
// import { LoginFormControlled } from './components';
import { LoginForm } from './components';
import { LoginPage } from './pages';
import { MagicButton } from './ui';
import { Viewport } from '@components/Viewport';
import { AuthInfo } from '@components/Auth';
// import { AuthContext } from '@components/Auth';
import { AuthProvider } from '@components/Auth';
import { ThemeProvider } from '@components/Theme';
import { Products } from '@components/Products';
import { Product } from '@components/Products';
import { Clicker } from '@components/Clicker';
import { ErrorBoundary, BuggyComponent } from '@components/ErrorBoundary';

const queryClient = new QueryClient();

const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { isLoggedIn } = useAuth();

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
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
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
              {/* <AuthInfo /> */}
              {/* <button onClick={() => setIsLoggedIn((value) => !value)}>Toggle</button> */}

              <Clicker />
              <Product />

              <ErrorBoundary fallbackComponent={<p>Error!!!</p>}>
                <BuggyComponent />
              </ErrorBoundary>
            </div>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
