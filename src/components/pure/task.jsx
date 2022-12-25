import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import "../../styles/task.scss";
import { LEVELS } from '../../modules/elevels.enum';
import { Task } from '../../modules/task.class';

const TaskComponent = ({ task, complete, remove }) => {

    // useEffect(() => {
    //     //console.log("Tarea Creada");
    //     return () => {
    //         console.log(`Task ${task.name} is going to`);
    //     };
    // }, [task]);
    
    /*
    * function tha return a badge depending on the level of the task
    */
    function taskLevel(){
        // eslint-disable-next-line default-case
        switch(task.level){
            case LEVELS.NORMAL:
                return (
                    <h6 className="mb-0">
                        <span className='badge bg-primary'>{task.level}</span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className="mb-0">
                        <span className='badge bg-warning'>{task.level}</span>
                    </h6>
                );
            case LEVELS.BLOQCKING:
                return (
                    <h6 className="mb-0">
                        <span className='badge bg-danger'>{task.level}</span>
                    </h6>
                );
            default:
                break;
        }
    }

    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi bi-toggle-on task-ction' style = {{color: 'green', fontSize: "20px"}}></i>)
        }else{
            return (<i onClick={() => complete(task)} className='bi bi-toggle-off task-action' style={{color: 'grey', fontSize: "20px"}}></i>)
        }
    }
    
    return (
        <tr className='fw-normal' style={task.completed ? styles.taskCompleted: styles.taskPending}>
            <th><span className='ms-2'>{task.name}</span></th>
            <th className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </th>
            <th className='align-middle'>
                {taskLevel()}
            </th>
            <th className='align-middle'>
                {taskCompletedIcon()}
                <i onClick={()=> remove(task)} className='bi bi-trash' style = {{color: 'tomato', fontSize: "20px"}}></i>
            </th>
        </tr>
    );
};

const styles ={
    taskCompleted: {
        color: 'grey',
        textDecoration: 'line-through'
    },
    taskPending:{
        color: 'tomato',
        fontWeight: 'bold'
    }

}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired

};


export default TaskComponent;
