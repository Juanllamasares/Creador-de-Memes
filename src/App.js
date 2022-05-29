
import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const cambiarLinea1 = function(evento){
    setLinea1(evento.target.value);
  }

  const cambiarLinea2 = function(evento){
    setLinea2(evento.target.value);
  }

  const cambiarImagen = function(evento){
    setImagen(evento.target.value);
  }

  const crearMeme = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }


  return (
    <div className="App">
        <select onChange={cambiarImagen}>
          <option value="homero-moe">Que haces aqui</option>
          <option value="homero-stupido">Hacer algo estupido</option>
          <option value="nerd">Nerd</option>
          <option value="queso">Toda la noche</option>
          <option value="trabajo-duro">Trabajo duro</option>
        </select>

        <br/>

        <input onChange={cambiarLinea1} type="text" placeholder="Primer linea"/>

        <br/>

        <input onChange={cambiarLinea2} type="text" placeholder="Segunda linea"/>

        <br/>

        <button onClick={crearMeme}>Crear meme</button>

        <div className="meme-container" id="meme">
          <span>{linea1}</span>
          <br/>
          <span>{linea2}</span>
          <img src={`/img/${imagen}.jpg`} alt=""imagen meme/>
        </div>

    </div>
  );
}

export default App;
