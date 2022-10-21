import './App.css';
import { Text } from './ui';
import { Generator } from './components';
// import { LoginFormControlled } from './components';
import { LoginForm } from './components';
import { LoginPage } from './pages';
import { MagicButton } from './ui';

const App = () => {
  return (
    <div className="App">
      {/* <Text>Today is payday</Text> */}
      {/* <Generator /> */}
      {/* <LoginForm /> */}
      {/* <LoginPage /> */}
      <MagicButton>Click me, please!</MagicButton>
    </div>
  );
}

export default App;
