import logo from './logo.svg';
import './App.css';

import Conversor from './components/conversor';

function App() {
  return (
    <div className="App">
      <div className="App">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>

      </div>
    </div>
  );
}

export default App;
