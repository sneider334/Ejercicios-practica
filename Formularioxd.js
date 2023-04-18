// 1. Agregar elementos a una lista
// Crea una aplicación que permita agregar elementos a una lista. Utiliza useState para 
// almacenar y actualizar la lista de elementos (array) y el valor del input (string). 
// La aplicación debe tener un input para ingresar los elementos y un botón para agregarlos a 
// la lista.

//6. Cronómetro
// Crea una aplicación que funcione como un cronómetro simple. Utiliza useState para almacenar y actualizar
// el tiempo transcurrido (number) y si el cronómetro está en ejecución o pausado (boolean). 
// Utiliza useEffect para gestionar el temporizador. Se puede hacer un temporizador con la funcion 
// setInterval y clearInterval


import { useState } from 'react';
import { useEffect } from 'react';

const ListaFormulario =()=>{

    const [valor, setValor] = useState("")
    const [usuarios,setUsuarios] = useState([])

    const clickChange = (e)=>{
        setValor(e.target.value)
    } 
    const clickUpdate = ()=>{
        const copia = usuarios.slice(0)
        copia.push(valor)
        setUsuarios(copia)
    }
    const [segundo, setSegundo] = useState(0);
    const [activo, setActivo] = useState(false);

    useEffect(
       ()=>{
        let intervalo = null
            if (activo) {
                intervalo = setInterval(
                    ()=>{setSegundo (segundo + 1)
                    },1000)
            } else if (!activo && segundo !== 0) {
                clearInterval(intervalo);
        }
        
        return () => clearInterval(intervalo);
        }, [activo, segundo]
    );


    const iniciarCronometro = ()=>{
        setActivo(true)
    }
    const pausarCronometro = ()=>{
        setActivo(false)
    }
    const resetearCronometro= ()=>{
        setActivo(false);
        setSegundo(0)
    }

    return(
        <div>
            <input onChange ={clickChange} type="text"/>
            <button onClick={clickUpdate}>Enviar pei</button>
            {usuarios.map((item)=>{return <p>{item}</p>})}
            <div>
                <h1>{segundo}</h1>
                <button onClick={iniciarCronometro}>Iniciar</button>
                <button onClick={pausarCronometro}>Pausar</button>
                <button onClick={resetearCronometro}>Resetear</button>
            </div>
        </div>
    )
}



export default ListaFormulario