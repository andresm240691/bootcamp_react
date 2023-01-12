import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import { taskContext } from './TaskContextReducer';


const TaskListUseReducer = ({
    onSubmitkAddTask,
    onClickUpdate,
    onClickDelete,
    onClickShowAll,
    onClickShowCompleted,
    onClickShowPending
}) => {

    const taskListState = useContext(taskContext);
        
    function renderTasktable(taskList){
        if(taskList.length > 0){
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
                    {taskList.map((task, index) => {
                        return (
                            <TaskComponent 
                            key = {index} 
                            task={task} 
                            complete={() => onClickUpdate(index)}
                            remove={() => onClickDelete(index)}>
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
                <div 
                    className="card-body" 
                    data-mdb-perfect-scrolbar='true' 
                    style={{
                        position: 'relative', 
                        hide: '400px'
                    }}>
                    {renderTasktable(taskListState)} 
                    <p>Filters</p>
                    <button onClick={onClickShowAll}>
                        ALL
                    </button> 
                    <button onClick={onClickShowCompleted}>
                        COMPLETED
                    </button>
                    <button onClick={onClickShowPending}>
                        PENDING
                    </button>     
                </div>
            </div>
            </div>
            <TaskForm add={onSubmitkAddTask} lenghtTasks={taskListState.length}></TaskForm>        
        </div>
    );
};


TaskListUseReducer.propTypes = {
    onSubmitkAddTask: PropTypes.func.isRequired, 
    onClickUpdate: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

const styles = {
    loading:{
      color: 'grey',
      fontSize:'30px',
      fontWeight: 'bold'
    }
}

export default TaskListUseReducer;
