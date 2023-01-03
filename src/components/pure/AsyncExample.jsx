import { alertTitleClasses } from '@mui/material';
import React from 'react'

const AsyncExample = () => {


  async function generateNumber(){
    return 1;
  }

  async function promiseNumber(){
    return Promise.resolve(2)
  }


  function optainNumber(){
    generateNumber()
        .then((response) => alert(`1.Response ${response}`))
        .catch((error) => alert(`Error ${error}`));
  }

  function optainNumberTWO(){
    promiseNumber().then((response) => alert(`2 Response ${response}`));
  }

  async function saveSessionStorage(key, value){
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key))
  }

  function showStorage(){
    saveSessionStorage("name", "Martin")
        .then((response) =>{
           let value = response;
           alert(`Saved Name: ${value}`) 
        })
        .catch((error) =>alert(`Error ${error}`))
        .finally(() => console.log("Name saved and retrived"))
  }

  async function optainMessage(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("Hellow World"));
    });
    let message = await promise;
    await alert(`Messahe recive ${message}`)
  }

  const returnError = async() =>{
    await Promise.reject(new Error("Oooops !"))
  }

  const consumeError = () =>{
    returnError()
        .then((response) => alert(`Everything is OK: ${response}`))
        .catch((error) => alert(`Everything went wront: ${error}`))
        .finally(() => alert("Finally executed"))
  }

  const urlNotFound = async() =>{
    try{
        let response = await fetch("https://invalidUrl.com")
        alert(`Response ${JSON.stringify(response)}`);
    }catch(error){
        alert(`Everything went wront with your url: ${error}`)
    }
  }

  const multiPromise = async() =>{
    let result = await Promise.all([
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users?page=2')
    ]).catch((error) => alert(`Error url: ${error}`))
  }

  return (
    <div>
        <h1>Async , Promise exmples</h1>
        <button onClick={optainNumber}>CLICK 1</button>
        <button onClick={optainNumberTWO}>CLICK 2</button>
        <button onClick={showStorage}>Save and Shoe name</button>
        <button onClick={optainMessage}>Send message in two seconds</button>
        <button onClick={consumeError}>Consume error</button>
        <button onClick={urlNotFound}>Request to unknown URL</button>
        <button onClick={multiPromise}>Multi Promises</button>
    </div>
  )
}

export default AsyncExample