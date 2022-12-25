/*Ciclo de vida de un componente*/

import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LifeCycleExample extends Component {
  //static propTypes = {second: third}

  constructor(props){
    super(props);
    console.log("Cuando se Instancia el componente");
  }

  componentWillMount(){
    console.log("WILLMOUNT: Antes del montaje del componente");
  }


  componentDidMount(){
    console.log("DIDMOUNT: justo al delmontaje del componente, antes de pintarlo");
  }

  componentWillReceiveProps(nextProps){
    console.log("WILLRECIVEPROS: jrecive props del padre");

  }

  shouldComponentUpdate(nextProps, nextState){
    /*controla si e debe actualzair el componente*/
  }


  componentWillUpdate(nextProps, nextState){
    console.log("WILLUPDATE: Justo antes de actualizarse")
  }

  componentDidUpdate(nextProps, nextState){
    console.log("WILLUPDATE: Justo despues de actualizarse")
  }

  componentWillUnmount(){
    console.log("WILLUPDATE: Justo antes de desaparecer")
  }



  render() {
    return (
      <div>LifeCycleExample</div>
    )
  }
}
