// 2. Validación de contraseña
// Crea una aplicación que tenga dos campos de texto para ingresar una contraseña y su confirmación. 
// Utiliza useState para almacenar y actualizar las contraseñas ingresadas (strings) y un estado booleano 
// para indicar si las contraseñas coinciden. Muestra un mensaje que indique si las contraseñas coinciden o no.

import { useState } from 'react';
import { useEffect } from 'react';

const Contrasena = ()=>{
    const [contra,setContra]= useState("");
    const [contra1,setContra1]= useState("");
    const [confirmacion,setConfirmacion]= useState("");
    const [confirmar,setConfirmar] = useState(false);

    if (contra == contra1) {
        setConfirmar (true);
        setConfirmacion("Ambas constraseñas coinciden") 
    } else {
        setConfirmar (false);
    }

    const verContra = (e)=>{
        setContra(e.target.value)
    }   
    const verContra1 = (e)=>{
        setContra1(e.target.value)
    }
    return(
        <div>
            <input onChange={verContra} type='text' placeholder='Ingresa la contraseña' className='formulario1'></input>
            <input onChange={verContra1} type='text'placeholder='Reconfirma la contraseña'className='formulario2'></input>
            <h1>{confirmacion}</h1>
        </div>
    )
}
export default Contrasena