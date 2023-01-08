import React, {useRef} from 'react'

const TodoForm = ({submit}) => {
  
   const newText = useRef();
  
  return (
    <div>
        <h1>Create yout form</h1>
        <form onSubmit={(e) =>{
            e.preventDefault();
            submit(newText.current.value);
            newText.current.value = '';
        }}>
            <input type="text" ref={newText}/>
            <button type='submit'>Create TODO</button>
        </form>
    </div>
  )
}

export default TodoForm