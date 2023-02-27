import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Home from './pages/Home'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Home />
      <Counter/>
    </div>
  );
}

export default App;
