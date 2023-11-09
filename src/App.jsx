
import './App.css'
import { useState } from 'react'
import Card from './components/Card'

function App() {

  const [nombre, setNombre] = useState("");
  const [personaje, setPersonaje] = useState("");
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangePersonaje = (e) => setPersonaje(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (nombre.length > 3 && !nombre.startsWith(" ") && personaje.length > 6) {
      setShow(true);
      setError(false);
    }else { 
      setError(true)
    }
  }


return(
  <div className='app'>
  <form onSubmit={onSubmitForm}>
    <input type="text" placeholder='ingresa tu nombre' value={nombre} onChange={onChangeNombre}/>
    <br/>
    <input type='text' placeholder='personaje favorito de marvel' value={personaje} onChange={onChangePersonaje}/>
    <br/>
    <button type='submit'>Enviar</button>
  </form>
  <div>
    {show ?
      <Card nombre={nombre} personaje={personaje}/>
    :
      null
    }
    {error && <h5 style={{color:"red"}}> verifique los datos ingresados</h5>}
  </div>
  </div>
  )
}

export default App
