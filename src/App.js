import './App.css';
import Repeater from './components/Repeater'
import {useState} from 'react'
import Menu from './components/Menu';

function App() {
  const [mode, setMode] = useState('Beds')
  return (
    <div className="App">
      <div id="heading">
        Bengaluru Covid Resources
      </div>
      <Menu mode={mode} setMode={setMode}/>
      <Repeater mode={mode} />
    </div>
  );
}

export default App;
