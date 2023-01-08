
import React from 'react'
import PropTypes from 'prop-types';


const Todo = ({onClick, completed, text, id}) => {
  return (
    <li onClick={onClick} 
        style={{
            textDecoration: completed? 'line-throught': 'black',
            textDecorationColor: completed? 'green': 'black',
            color: completed? 'green': 'black'
        }}>
            {id} - {text}    
    </li>
  )
}

Todo.propTypes ={
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;