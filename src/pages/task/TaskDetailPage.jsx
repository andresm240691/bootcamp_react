import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import { Task } from '../../modules/task.class';

function TaskDetailPage() {

  const {id} = useParams();

  const location = useLocation();
  const taskItem = location.state;

  return (
    <div>
      <h1>taskItemDetailPage - {id}</h1>
      <h2>{taskItem.name}</h2>
      <h2>{taskItem.description}</h2>  
    </div>
  )
}

export default TaskDetailPage