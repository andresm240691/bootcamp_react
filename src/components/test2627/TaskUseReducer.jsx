import React, {
  useReducer
} from 'react'
import { 
  ADD_TASK, 
  DELETE_TASK, 
  UPDATE_TASK, 
  taskContext,
  taskReducer,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_PENDING,
} from './TaskContextReducer';
import TaskListUseReducer from './TaskListUseReducer';



function TaskUseReducer() {

  const [state, dispatch] = useReducer(taskReducer, []);

  const onSubmitkAddTask = (task) =>{
    dispatch ({
      type: ADD_TASK,
      payload:{
        task: task
      }
    })
  }

  const onClickUpdate = (index) =>{
    dispatch({
      type: UPDATE_TASK, 
      payload: {
        index: index
      }
    })
  }

  const onClickDelete = (index) =>{
    dispatch({
      type: DELETE_TASK,
      payload:{
        index: index
      } 
    })
  }

  const onClickShowAll = () =>{
    dispatch({type: SHOW_ALL});
  }

  const onClickShowCompleted = () =>{
    dispatch({type: SHOW_COMPLETED});
  }

  const onClickShowPending = () =>{
    dispatch({type: SHOW_PENDING});
  }


  return (
    <taskContext.Provider value={state}>
      <div>
        <h1>Task List</h1>
        <TaskListUseReducer 
          onClickDelete={onClickDelete}
          onClickUpdate={onClickUpdate}
          onSubmitkAddTask={onSubmitkAddTask}
          onClickShowAll={onClickShowAll}
          onClickShowCompleted={onClickShowCompleted}
          onClickShowPending={onClickShowPending}
          >
        </TaskListUseReducer>
      </div>
    </taskContext.Provider>
    
  )
}

export default TaskUseReducer