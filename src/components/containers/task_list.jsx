import React, {useState, useEffect} from 'react'
import { LEVELS } from '../../modules/elevels.enum';
import {Task} from '../../modules/task.class'
import TaskComponent from '../pure/task';
import TaskForm from  '../pure/forms/taskForm';


function TaskListComponent(props) {

  const defaultTask1 = new Task('Example1', 'desccccc', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'desccccc', false, LEVELS.BLOQCKING); 
  const defaultTask3 = new Task('Example3', 'desccccc', true, LEVELS.URGENT);   
    

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    console.log("Modificacion de tareas");

    setTimeout(()=> {
      setLoading(false);
    }, 2000);

    return () => {
      console.log("task List component is going to unmount....");
    }
  }, [tasks])

  function completeTask(task){
    console.log("COMPLETE THIS TASK", task)
    const indexTask = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[indexTask].completed = !tempTasks[indexTask].completed;
    // We update the state of the component ant it will update the
    //iteration of the tasks in rder to show the task updated
    setTasks(tempTasks);
  }

  function removeTask(task){
    console.log("DELETE THIS TASK", task)
    const indexTask = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(indexTask, 1);
    setTasks(tempTasks);
  }

  function addTask(task){
    console.log("ADD TASK: ", task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }
  
  function renderTasktable(){
    if(tasks.length > 0){
      return(
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
              return (
                <TaskComponent 
                  key = {index} 
                  task={task} 
                  complete={completeTask}
                  remove={removeTask}>
                </TaskComponent>
              )  
          })}
        </tbody>
      </table>
      )
    }else{
      return(
        <div>
          <h3>There are no task</h3>
          <h4>Please. Create a new task</h4>
        </div>
      )
    }
  }
  
  return (
    <div>
        <div className='col-12'>
          <div className='card'>
            <div className="card-header p-3">
              <h5>Your Task</h5>
            </div>
            <div className="card-body" data-mdb-perfect-scrolbar='true' style={{position: 'relative', hide: '400px'}}>
            {loading ? <p style={styles.loading}>Loading Task...</p>: renderTasktable()}
            </div>
          </div>
        </div>
        <TaskForm add={addTask} lenghtTasks={tasks.length}></TaskForm>        
    </div>
  )
}

const styles ={

  loading:{
    color: 'grey',
    fontSize:'30px',
    fontWeight: 'bold'
  }
}


export default TaskListComponent;
