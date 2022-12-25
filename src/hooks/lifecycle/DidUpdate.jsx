/*
    metod
*/


import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log("Comportamientocuando el compoenente recive nuevos props o en su estadoprivado");
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}



export const DidUpdateHook = () => {

    useEffect(()=>{
        console.log("Comportamientocuando el compoenente recive nuevos props");
    });


    return (
        <div>
             <h1>DidUpdate</h1>
        </div>
    );
}


