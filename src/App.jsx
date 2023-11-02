import Lista from './components/Lista'
import './App.css'
import { useState } from 'react'

function App() {

  const[search, setSearch ]= useState("")
  const[docsFound, setDocsFound] = useState([])
  const[error, setError] = useState(false)
  const[show, setShow] = useState(false)
  let doctores = [
    { id: 1, nombre: 'Rick Sanchez', especialidad: 'Gastroenterologo'},
    { id: 2, nombre: 'Julius Hibbert' , especialidad: 'Dermatologo'},
    { id: 3, nombre: 'Nick Riviera' , especialidad: 'Otrorrinonaringologo'},
    { id: 4, nombre: 'John Zoidberg ' , especialidad: 'Cirujano'}
  ]

  const handleChange = (e) => setSearch(e.target.value.trim())
  const handleSearch = () =>{
    const filteredDocs = doctores.filter(doctor => doctor.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setDocsFound(filteredDocs)
    if(filteredDocs.length > 0){
      setShow(true)
      setError(false)
    } else{
      setError(true)
      setShow(false)
    }
  }
return(
  <>
  <input type="text" placeholder="busqueda" onChange={handleChange}/>
  <button onClick={handleSearch}>buscar🔍</button>
  
  {show ?
    <>
      <h3>Doctores encontrados</h3>  
      <Lista doctores={docsFound}/>
    </>
    :
    <Lista doctores={doctores}/>
    }
    {error && <h3>No se encontraron doctores.</h3>} 
  </>
  )
}

export default App
