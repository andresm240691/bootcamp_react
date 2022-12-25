import React,{useState, useEffect} from 'react'


const styles = {
    color: 'green'
}


const Clock = () => {

  const initalClockState  = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José"  
  };

  const [clockState, setClockState] = useState(initalClockState);
  


  useEffect(() => {
    let newAge = clockState.edad;
    let newDate = clockState.fecha;

    console.log('Componente creado')

    const intervalID = setInterval(() => {
        newAge++;
        newDate = new Date();
        setClockState({
            fecha: newDate,
            edad:  newAge
        })
        console.log('Actualización del componente')
    }, 100);

    return () => {
        console.log('Componente va a desaparecer');
        clearInterval(intervalID);
    }

  }, []);



  return (
    <div>
    <h2 style={styles}>
        Hora Actual: {clockState.fecha.toLocaleTimeString()}
    </h2>
    <h3>{clockState.nombre} {clockState.apellidos}</h3>
    <h1>Edad: {clockState.edad}</h1>
    </div>
  )
}

export default Clock