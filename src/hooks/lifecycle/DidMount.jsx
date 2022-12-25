/*Uso DidMount en componente clase y compnente funtcion con hook*/

import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log("DIDMOUNT: Antes de ser a;adido al DOM");
    }
    
  render() {
    return (
      <div>DidMount</div>
    )
  }
};


export const DidMountHook = () => {

    useEffect(() => {
        console.log("DIDMOUNT: Antes de ser a;adido al DOM");
    }, []);

    return (
        <div>
           <div>DidMount</div> 
        </div>
    );
};



