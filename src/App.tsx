import './App.css';
import { Text } from './ui';
import { Generator } from './components';
// import { LoginFormControlled } from './components';
import { LoginForm } from './components';

const App = () => {
  return (
    <div className="App">
      <Text>Today is payday</Text>
      <Generator />
      <LoginForm />
    </div>
  );
}

export default App;
