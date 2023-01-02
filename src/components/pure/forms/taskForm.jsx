import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../modules/elevels.enum';
import {Task} from '../../../modules/task.class'
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from 'formik';
import * as Yup from 'yup';


const TaskForm = ({add, lenghtTasks}) => {

  const initialTask  = {
    name: "",
    description: "",
    level: LEVELS.NORMAL,
    completed: false
  };

  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    description: Yup.string()
      .required("description is required"),
    level: Yup.string()
      .required("Level is required")
  });

  const instanceTaskForm = (lenghtTasks) =>{
    return (
      <Form className='d-flex justify-conetnt-center align-items-center mb-4 mt-5'>
        <div className='form-outline flex-fill'>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Title</label>
              <Field name="name" id='inputName' type='text' className='form-control form-control-lg' required autoFocus/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputDescription" className="form-label">Description</label>
              <Field name="description" id='inputDescription' type='text' className='form-control form-control-lg' required autoFocus/>
            </div>
            <div className="mb-3">
              <label htmlFor="selectLevel" className='sr-only'>Prioridad</label>
              <select name="level" className="form-select" defaultValue={LEVELS.NORMAL} id='selectLevel'>
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
              {lenghtTasks.length === 0 ? "Add Task": "Create Task"}
            </button>
        </div>
      </Form>
    );
  }


  const addTask = async(values) =>{
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    const newTask = new Task(
      values.name,
      values.description,
      false,
      values.level
    );
    add(newTask);
  }

  return (
    <Formik
      initialValues={initialTask}
      validationSchema={taskSchema}
      onSubmit={addTask}>
        {instanceTaskForm(lenghtTasks)}
    </Formik>
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