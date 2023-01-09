import React from 'react'
import { connect } from 'react-redux'
import { addTask, deleteTask, updateTask } from '../../store/actions/taskActions'
import TaskListRedux from './TaskListRedux'


const mapStateToProps = (state) => {
    return {
        taskList: state.taskState,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSubmitkAddTask: (value) =>{
            dispatch(addTask(value));
        },
        onClickUpdate: (index) =>{
            dispatch(updateTask(index));
        },
        onClickDelete: (index) =>{
            dispatch(deleteTask(index));
        }
    }
    
} 

const TaskListContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(TaskListRedux)

export default TaskListContainer;