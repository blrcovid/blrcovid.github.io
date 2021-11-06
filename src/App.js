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
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.826994912083!2d77.64281491464536!3d12.982914790848437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16b04e7b0af7%3A0x8e235296e543de9e!2sSir.C.V.%20Raman%20General%20Hospital!5e0!3m2!1sen!2sin!4v1621581161645!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> */}
    </div>
  );
}

export default App;
