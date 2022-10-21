import './App.css';
import { Text } from './ui';
import { Generator } from './components';
// import { LoginFormControlled } from './components';
import { LoginForm } from './components';
import { LoginPage } from './pages';

const App = () => {
  return (
    <div className="App">
      <Text>Today is payday</Text>
      <Generator />
      {/* <LoginForm /> */}
      <LoginPage />
    </div>
  );
}

export default App;
