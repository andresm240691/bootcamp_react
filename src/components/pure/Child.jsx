import React, {useRef} from 'react'

const Child = ({name, send, update}) => {


  const messageRef = useRef('');

  const nameRef = useRef('');

  function clickButton(){
    const text = messageRef.current.value;
    alert("Default Text: " + text);
  }

  function clickButtnParams(text){
    alert(`Text: ${text}`)
  }

  function submitName(e){
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{backgroundColor: 'cyan', padding: 'px'}}>
      <p onMouseOver={()=> console.log("On Mouse Over")}>Hello, {name} </p>
      <button onClick={() => console.log("BOTON 1 CLICK")}>BOTON 1</button>
      <button onClick={clickButton}>BOTON 2</button>
      <button onClick={() => clickButtnParams("Hola Mundo")}>BOTON 3</button>
      <input type="text" 
        placeholder='Insert a text' 
        onFocus={() => console.log('Input Focus')}
        onChange={(e)=> console.log('Input Change', e.target.value)}
        onCopy={() => console.log("ON COPY")}
        ref={messageRef}
      />
      <button onClick={() => send(messageRef.current.value)}>SEND MESSAGE</button>
      <div style={{marginTop:'20px'}}>
        <form onSubmit={submitName}>
          <input ref={nameRef} type="text" placeholder='New Name' />
          <button type='submit'>Update Name</button>
        </form>
      </div>
    </div>
  )
}

export default Child