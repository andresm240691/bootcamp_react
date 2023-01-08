import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'

// export const TodoContainer = (props) => {
//   return (
//     <div>TodoContainer</div>
//   )
// }

const filterTodos = (todos, filter) =>{
    console.log("FILTER EXECUTE => filter", filter);
    console.log("FILTER EXECUTE => todos", todos);
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed)
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onTodoClick: (id) =>{
            dispatch(toggleTodo(id))
        }
    }
}

const TodoContainer  = connect(mapStateToProps, mapDispatchToProps)(TodoList)


export default TodoContainer;