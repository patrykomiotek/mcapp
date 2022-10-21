import './App.css';
import { Text } from './ui';
import { Generator } from './components';

const App = () => {
  return (
    <div className="App">
      <Text>Today is payday</Text>
      <Generator />
    </div>
  );
}

export default App;
