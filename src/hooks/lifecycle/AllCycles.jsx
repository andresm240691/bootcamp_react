import React,{useEffect} from 'react'

export const AllCycles = () => {

  useEffect(() => {
    console.log("Componete actualzaido");
    const intervalID = setInterval(()=> {
        document.title = `${new Date()}`;
        console.log("Actualizado del componente");
    }, 1000);
    return () => {
      document.title = `tiempo detenido`;
      console.log("Componenete desaparece");
    }
  }, [])
    


  return (
    <div>
        
    </div>
  )
}
