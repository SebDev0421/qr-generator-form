import logo from './logo.svg';
import './App.css';

var QRCode = require('qrcode.react')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input
         placeholder="Modelo"
        />
        <input
         placeholder="Modelo"
        />
        <input
         placeholder="Modelo"
        />

        <QRCode 
         value = "{Serial:2025b,Type:Partisol2025}"
        />
      </header>
    </div>
  );
}

export default App;
