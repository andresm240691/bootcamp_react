import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../modules/elevels.enum';
import {Task} from '../../../modules/task.class'

const TaskForm = ({add, lenghtTasks}) => {

  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e){
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-conetnt-center align-items-center mb-4 mt-5'>
      <div className='form-outline flex-fill'>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Title</label>
          <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">Description</label>
          <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required autoFocus/>
        </div>
        <div className="mb-3">
          <label htmlFor="selectLevel" className='sr-only'>Prioridad</label>
          <select className="form-select" ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
            <option style={styles.normalLabel} value={LEVELS.NORMAL}>
                Normal
            </option>
            <option style={styles.urgentLabel} value={LEVELS.URGENT}>
                Urgent
            </option>
            <option style={styles.blokingLabel} value={LEVELS.BLOQCKING}>
                Blocking
            </option>
          </select>
        </div>
        <button type='submit' className='btn btn-success btn-lg ms-2'>
          {lenghtTasks > 0? "Add ew task": "Create first task"}
        </button>
      </div>
    </form>
  );
} 

const styles = {
  urgentLabel:{
    color: 'blue',
    fontWeight: 'bold'
  },
  normalLabel:{
    color: 'yellow',
    fontWeight: 'bold'
  },
  blokingLabel:{
    color: 'red',
    fontWeight: 'bold'
  }
}


TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
}

export default TaskForm