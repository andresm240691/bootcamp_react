import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log("Comportamiento antes de que el compoenente desaparesca")
    }

    render() {
        return (
            <div>
                <div>WillUnmount</div> 
            </div>
        );
    }
}



export const WillUnmountHook = () => {

   useEffect(() => {
        return () =>{
            console.log("Comportamiento antes de que el compoenente desaparesca");
        };
   }, []); 


  return (
    <div>WillUnmount</div>
  )
}
