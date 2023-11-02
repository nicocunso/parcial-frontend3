import React from 'react'
import "../styles/Card.css"
const card = ({nombre, personaje}) => {

    


    return (
        <div className='card'>
            <h3>hola {nombre}!</h3>
            <h3>tu personaje favorito es <spam>{personaje}</spam></h3>
        </div>
    )
}

export default card